const en = require("./locales/cjs/gregorian_en");
const gregorian = require("./calendars/cjs/gregorian");

class DateObject {
  #year;
  #month;
  #day;
  #hour;
  #minute;
  #second;
  #millisecond;
  #format;
  #locale = en;
  #calendar = gregorian;
  #isUTC = false;
  #custom = {};
  #isoDate = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ$/;
  #ignoreList = [];
  #mustFix = true;

  constructor(object) {
    let obj = this.#isObject(object) ? { ...object } : object;
    let mustFix = true;

    if (!obj || typeof obj === "boolean") obj = { date: new Date() };
    if (!this.#isObject(obj)) obj = { date: obj };
    if (Object.keys(obj).length === 0) return;
    if (this.#isObject(obj.calendar)) this.#calendar = obj.calendar;
    if (this.#isObject(obj.locale)) this.#locale = obj.locale;

    if (isNaN(obj.year) && isNaN(obj.month) && isNaN(obj.day) && !obj.date) {
      obj.date = new Date();
    }

    if (obj.date) {
      if (typeof obj.date === "string" && obj.format) this.#format = obj.format;

      this.setDate(obj.date);

      if (obj.calendar) this.convert(obj.calendar);

      mustFix = false;
    }

    delete obj.calendar;
    delete obj.locale;
    delete obj.date;

    for (let key in obj) this.set(key, obj[key]);

    if (this.#mustJumpFromZero()) this.#year = -1;
    if (mustFix) this.#fix();
  }

  #isObject = (obj) => {
    return obj && obj.constructor === Object;
  };

  #getKeyValue = (token, string) => {
    switch (token) {
      case "YYYY":
        return ["year", string];
      case "YY":
        return ["year", `${this.#calendar.century}${string}`];
      case "MMMM":
      case "MMM":
        return [
          "month",
          this.months.findIndex(({ name, shortName }) =>
            new RegExp(string, "i").test(name + shortName)
          ) + 1,
        ];
      case "MM":
      case "M":
        return ["month", string];
      case "DD":
      case "D":
        return ["day", string];
      case "HH":
      case "H":
        return ["hour", string];
      case "hh":
      case "h":
        let hour = this.#toNumber(string);

        return ["hour", hour > 12 ? hour - 12 : hour];
      case "mm":
      case "m":
        return ["minute", string];
      case "ss":
      case "s":
        return ["second", string];

      case "SSS":
      case "SS":
      case "S":
        return ["millisecond", string];
      default:
        return [];
    }
  };

  parse(date) {
    if (!date) return this;

    let format = this.#format;
    let digits = this.#locale.digits;

    //converting current digits to english
    for (let digit of digits) {
      date = date.replace(new RegExp(digit, "g"), digits.indexOf(digit));
    }

    if (!format) {
      const regex =
        /(-?\d{2,4})?\W?([A-z]{3,9}|\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,3})?\W?(am|pm)?/;
      let [, ...array] = date.match(regex);

      let month = array[1];

      if (month) {
        if (/\d+/.test(month)) {
          month = this.#toNumber(month) - 1;
        } else {
          month = this.months.findIndex(($month) =>
            new RegExp(month, "i").test($month.name)
          );
        }
      }

      array[1] = month;

      let [year, $month, day, hour, minute, second, millisecond] = array.map(
        this.#toNumber
      );

      this.#year = year;
      this.#month = $month;
      this.#day = day;
      this.#hour = hour;
      this.#minute = minute;
      this.#second = second;
      this.#millisecond = millisecond;
    } else {
      const tokens = format.split(/[^\w\u0600-\u06FF]/),
        values = date.split(/[^\w\u0600-\u06FF]/);

      for (let i = 0; i < tokens.length; i++) {
        this.set(...this.#getKeyValue(tokens[i], values[i]));
      }
    }

    let [PM, pm] = this.#locale.meridiems[1];

    if (this.#hour < 12 && (date.includes(PM) || date.includes(pm))) {
      this.#hour = this.#hour + 12;
    }

    this.#fix();

    return this;
  }

  #mustJumpFromZero = () => {
    /**
     * All supported calendars in this library (except Indian calendar) start at
     * year:1, month:1, day:1 (Indian date start at year:0, month:1, day:1)
     * so the year before year 1 is year -1
     * @see https://en.wikipedia.org/w/index.php?title=Indian_national_calendar&oldid=360117718
     */
    return this.#year === 0 && this.#calendar.startYear !== 0;
  };

  #fix = () => {
    if (!this.#mustFix || !this.isValid) return;

    const floor = Math.floor,
      getCoefficient = (number) => (number < 0 ? -1 : 1),
      isIncorrect = (value, maximum) => value >= maximum || value < 0,
      num = (val1, val2) => (val1 < 0 && floor(val1 % val2) !== -0 ? val2 : 0),
      getCurrectValue = (value, maximum) => [
        getCoefficient(value) * Math.abs(floor(value / maximum)),
        num(value, maximum) + floor(value % maximum),
      ],
      setMonth = () => {
        if (this.#month < 0 || this.#month > 11) {
          let startYear = this.#month < 0 ? -1 : 1;
          let [extraAmount, month] = getCurrectValue(this.#month, 12);

          this.#year += extraAmount;
          this.#month = month;

          if (this.#mustJumpFromZero()) this.#year = startYear;
        }
      },
      properties = [
        ["millisecond", "second", 1000],
        ["second", "minute", 60],
        ["minute", "hour", 60],
        ["hour", "day", 24],
      ];

    /**
     * In order to fixing some incorrect values and
     * to prevent from running the nested #fix() method,
     * we set the #mustFix to false.
     */

    this.#mustFix = false;

    properties.forEach(([currentProperty, nextProperty, maximum]) => {
      if (isIncorrect(this[currentProperty], maximum)) {
        let [extraAmount, value] = getCurrectValue(
          this[currentProperty],
          maximum
        );

        this[nextProperty] += extraAmount;
        this[currentProperty] = value;
      }
    });

    this.#mustFix = true;

    setMonth();

    while (
      this.#day < -this.#calendar.yearLength ||
      this.#day > this.#calendar.yearLength
    ) {
      if (this.#month > 0) {
        let months = this.#calendar.getMonthLengths(this.isLeap);

        for (let i = 0; i < this.#month; i++) this.#day += months[i];

        this.#month = 0;
      }

      let yearLength = this.isLeap
        ? this.calendar.yearLength + 1
        : this.calendar.yearLength;

      this.#day += yearLength * (this.#day < 0 ? 1 : -1);
      this.#year += this.#day < 0 ? -1 : 1;
    }

    while (true) {
      setMonth();

      while (this.#day < 1) {
        this.#month -= 1;

        setMonth();

        this.#day = this.month.length + this.#day;
      }

      if (this.#day <= this.month.length || isNaN(this.#day)) break;

      this.#day -= this.month.length;
      this.#month++;
    }

    if (!this.#hour) this.#hour = 0;
    if (!this.#minute) this.#minute = 0;
    if (!this.#second) this.#second = 0;
    if (!this.#millisecond) this.#millisecond = 0;
  };

  convert(calendar = gregorian, locale) {
    if (this.#isObject(locale)) this.#locale = locale;
    if (!this.#isObject(calendar) || calendar.name === this.#calendar.name) {
      return this;
    }

    let days = this.toJulianDay() - calendar.epoch;

    let target = new DateObject({
      calendar,
      year: calendar.guessYear(days, this.#year),
      month: 1,
      day: 1,
    });

    target.day += days - target.toDays();

    this.#year = target.year;
    this.#month = target.month.index;
    this.#day = target.day;
    this.#calendar = calendar;

    return this;
  }

  format(format, ignoreList) {
    if (!this.isValid || (format && typeof format !== "string")) return "";
    if (!format) format = this.#format || "YYYY/MM/DD";
    if (!Array.isArray(ignoreList)) ignoreList = [];

    ignoreList = ignoreList.concat(this.#ignoreList);

    ignoreList = ignoreList
      .filter((item) => {
        if (typeof item !== "string") {
          console.warn(
            "type of all items in the ignore list must be string, found",
            typeof item
          );
          return false;
        }

        return true;
      })
      .map((string) => string.replace(/[*/+\-()[\]{}\s$^]/g, (w) => "\\" + w));

    let regex = new RegExp(
        `${ignoreList.join("|")}${
          ignoreList.length > 0 ? "|" : ""
        }YYYY|YY|MMMM|MMM|MM|M|WW|W|DDDD|DDD|DD|D|dddd|ddd|dd|d|HH|H|hh|h|mm|m|ss|s|SSS|SS|S|A|a|.`,
        "g"
      ),
      array = format.match(regex) || [],
      result = "";

    for (let item of array) {
      let value = this.getValue(item);

      result += ignoreList.includes(item)
        ? item
        : value === 0
        ? value
        : value || item;
    }

    //converting to locale digits
    let digits = this.digits;

    return result.replace(/[0-9]/g, (w) => digits[w]);
  }

  /**
   * @deprecated
   */
  getProperty(key) {
    return this.getValue(key);
  }

  getValue(key) {
    const pad = (number) => (number < 10 ? "0" + number : number);

    switch (key) {
      case "YYYY":
        return this.year;
      case "YY":
        return this.year.toString().substring(2, 4);
      case "MMMM":
        return this.month.name;
      case "MMM":
        return this.month.shortName;
      case "MM":
        return pad(this.month.number);
      case "M":
        return this.month.number;
      case "WW":
        return pad(this.weekOfYear);
      case "W":
        return this.weekOfYear;
      case "DDDD":
      case "DDD":
        return this.dayOfYear;
      case "DD":
        return pad(this.day);
      case "D":
        return this.day;
      case "HH":
        return pad(this.hour);
      case "H":
        return this.hour;
      case "dddd":
        return this.weekDay.name;
      case "ddd":
        return this.weekDay.shortName;
      case "dd":
        return pad(this.weekDay.number);
      case "d":
        return this.weekDay.number;
      case "hh":
        return pad(this.hour > 12 ? this.hour - 12 : this.hour || 12);
      case "h":
        return this.hour > 12 ? this.hour - 12 : this.hour || 12;
      case "mm":
        return pad(this.minute);
      case "m":
        return this.minute;
      case "ss":
        return pad(this.second);
      case "s":
        return this.second;
      case "SSS":
        return this.#millisecond < 10
          ? `00${this.#millisecond}`
          : this.#millisecond < 100
          ? `0${this.#millisecond}`
          : this.#millisecond;
      case "SS":
        return this.#millisecond < 10
          ? `00`
          : this.#millisecond < 100
          ? ("0" + this.#millisecond).substring(2, 0)
          : this.#millisecond.toString().substring(0, 2);
      case "S":
        return this.#millisecond < 10
          ? "0"
          : this.#millisecond < 100
          ? "0"
          : this.#millisecond.toString().substring(0, 1);
      case "a":
        return this.hour >= 12
          ? this.#locale.meridiems[1][1]
          : this.#locale.meridiems[0][1];
      case "A":
        return this.hour >= 12
          ? this.#locale.meridiems[1][0]
          : this.#locale.meridiems[0][0];
      default:
        return "";
    }
  }

  setYear(number) {
    this.year = number;

    return this;
  }

  setMonths(value) {
    this.months = value;

    return this;
  }

  setMonth(number) {
    this.month = number;

    return this;
  }

  setWeekDays(value) {
    this.weekDays = value;

    return this;
  }

  setDigits(value) {
    this.digits = value;

    return this;
  }

  setDay(number) {
    this.day = number;

    return this;
  }

  setHour(number) {
    this.hour = number;

    return this;
  }

  setMinute(number) {
    this.minute = number;

    return this;
  }

  setSecond(number) {
    this.second = number;

    return this;
  }

  setMillisecond(number) {
    this.millisecond = number;

    return this;
  }

  setFormat(format) {
    this.#format = format;

    return this;
  }

  setLocale(locale) {
    this.locale = locale;

    return this;
  }

  setCalendar(calendar) {
    this.calendar = calendar;

    return this;
  }

  setDate(date) {
    if (typeof date === "string") {
      if (this.#isoDate.test(date)) {
        date = new Date(date);
      } else {
        return this.parse(date);
      }
    }

    if (typeof date === "number") date = new Date(date);

    if (date instanceof Date) {
      this.#calendar = gregorian;
      this.#year = date.getFullYear();
      this.#month = date.getMonth();
      this.#day = date.getDate();
      this.#hour = date.getHours();
      this.#minute = date.getMinutes();
      this.#second = date.getSeconds();
      this.#millisecond = date.getMilliseconds();
      this.#isUTC = false;
    }

    if (date instanceof DateObject) {
      this.#year = date.year;
      this.#month = date.month.index;
      this.#day = date.day;
      this.#hour = date.hour;
      this.#minute = date.minute;
      this.#second = date.second;
      this.#millisecond = date.millisecond;
      this.#locale = date.locale;
      this.#format = date._format;
      this.#calendar = date.calendar;
      this.#isUTC = date.isUTC;
      this.#ignoreList = date.ignoreList;
      this.#custom = date.custom;
    }

    return this;
  }

  setIgnoreList(ignoreList) {
    this.ignoreList = ignoreList;

    return this;
  }

  set(key, value) {
    if (key === undefined || key === null) return this;

    if (this.#isObject(key)) {
      let object = { ...key };

      if (object.date) {
        this.setDate(object.date);
        delete object.date;
      }

      if (object.calendar) {
        this.convert(object.calendar);
        delete object.calendar;
      }

      if (object.locale) {
        this.setLocale(object.locale);
        delete object.locale;
      }

      this.#mustFix = false;

      for (let key in object) this.set(key, object[key]);

      this.#mustFix = true;
      this.#fix();

      return this;
    }

    if (key === "format") key = "_format";

    try {
      this[key] = value;
    } catch {}

    return this;
  }

  add(duration, type) {
    duration = this.#toNumber(duration);

    if (!duration || !type) return this;

    switch (type) {
      case "years":
      case "y":
        type = "year";
        break;
      case "months":
      case "M":
        type = "month";
        break;
      case "days":
      case "d":
        type = "day";
        break;
      case "hours":
      case "h":
        type = "hour";
        break;
      case "minutes":
      case "m":
        type = "minute";
        break;
      case "seconds":
      case "s":
        type = "second";
        break;
      case "milliseconds":
      case "ms":
        type = "millisecond";
        break;
    }

    this[type] += duration;

    return this;
  }

  subtract(duration, type) {
    return this.add(-duration, type);
  }

  toFirstOfYear() {
    this.month = 1;
    this.day = 1;

    return this;
  }

  toLastOfYear() {
    if (this.day >= 29) this.day = 29;

    this.month = 12;
    this.toLastOfMonth();
    return this;
  }

  toFirstOfMonth() {
    this.#day = 1;
    return this;
  }

  toLastOfMonth() {
    this.#day = 0;
    this.#month += 1;
    this.#fix();
    return this;
  }

  toFirstOfWeek() {
    this.day -= this.weekDay.index;

    return this;
  }

  toLastOfWeek() {
    this.day += 6 - this.weekDay.index;

    return this;
  }

  toFirstWeekOfYear() {
    this.toFirstOfYear();

    if (this.weekDay.index === 0) return this;

    return this.toLastOfWeek().setDay(this.day + 1);
  }

  toLastWeekOfYear() {
    return this.toLastOfYear().toFirstOfWeek();
  }

  toString() {
    return this.format();
  }

  toDate() {
    let date = new DateObject(this);

    if (this.#calendar.name !== "gregorian") date.convert(gregorian);

    return new Date(
      date.year,
      date.month.index,
      date.day,
      date.hour,
      date.minute,
      date.second,
      date.millisecond
    );
  }

  toUTC() {
    if (!this.#isUTC) {
      this.minute += this.toDate().getTimezoneOffset();
      this.#isUTC = true;
    }

    return this;
  }

  toUnix() {
    return this.unix;
  }

  toJulianDay() {
    return this.toDays() + this.#calendar.epoch;
  }

  toObject() {
    return {
      year: this.#year,
      month: this.month,
      day: this.#day,
      weekDay: this.weekDay,
      hour: this.#hour,
      minute: this.#minute,
      second: this.#second,
      millisecond: this.#millisecond,
      weekOfYear: this.weekOfYear,
      dayOfYear: this.dayOfYear,
      daysLeft: this.daysLeft,
      calendar: this.#calendar,
      locale: this.#locale,
      format: this.#format || "YYYY/MM/DD",
      ignoreList: this.#ignoreList,
    };
  }

  toJSON() {
    return this.valueOf();
  }

  valueOf() {
    return this.toDate().valueOf();
  }

  toDays() {
    if (!this.isValid) return;

    return this.#calendar.getAllDays(this);
  }

  /**
   * @deprecated
   */
  get dayOfBeginning() {
    return this.toDays();
  }

  get dayOfYear() {
    if (!this.isValid) return;

    return this.#calendar.getDayOfYear(this);
  }

  get weekOfYear() {
    if (!this.isValid) return;

    return ~~(this.dayOfYear / 7) + 1;
  }

  get daysLeft() {
    if (!this.isValid) return;

    let yearLength = this.#calendar.yearLength,
      days = this.isLeap ? yearLength + 1 : yearLength;

    return days - this.dayOfYear;
  }

  get year() {
    return this.#year;
  }

  get month() {
    return this.months[this.#month] || {};
  }

  get day() {
    return this.#day;
  }

  get weekDay() {
    if (!this.isValid) return {};

    let index = (this.toJulianDay() + 2) % 7;

    return this.#getWeekDays()[index];
  }

  get hour() {
    return this.#hour;
  }

  get minute() {
    return this.#minute;
  }

  get second() {
    return this.#second;
  }

  get millisecond() {
    return this.#millisecond;
  }

  get months() {
    let monthLengths = this.#calendar.getMonthLengths(this.isLeap);

    let months = (this.#custom.months || this.#locale.months).map(
      ([name, shortName], index) => ({
        name,
        shortName,
        length: monthLengths[index],
        index,
        number: index + 1,
        toString() {
          return this.number.toString();
        },
        valueOf() {
          return this.number;
        },
      })
    );

    return months;
  }

  #getWeekDays = () => {
    return (this.#custom.weekDays || this.#locale.weekDays).map(
      ([name, shortName], i) => {
        let index = this.#calendar.weekDaysIndex[i];

        return {
          name,
          shortName,
          index,
          number: index + 1,
          toString() {
            return this.number.toString();
          },
          valueOf() {
            return this.number;
          },
        };
      }
    );
  };

  get weekDays() {
    return this.#getWeekDays().sort((a, b) => a.index - b.index);
  }

  get leaps() {
    return this.#calendar.getLeaps(this.#year);
  }

  get calendar() {
    return this.#calendar;
  }

  get locale() {
    return this.#locale;
  }

  get custom() {
    return this.#custom;
  }

  get meridiems() {
    return this.#locale.meridiems;
  }

  get digits() {
    return this.#custom.digits || this.#locale.digits;
  }

  get _format() {
    return this.#format;
  }

  get isLeap() {
    return this.#calendar.isLeap(this.#year);
  }

  get isValid() {
    return !isNaN(this.#year) && !isNaN(this.#month) && !isNaN(this.#day);
  }

  get isUTC() {
    return this.#isUTC;
  }

  get unix() {
    return (this.valueOf() - this.millisecond) / 1000;
  }

  get ignoreList() {
    return this.#ignoreList;
  }

  set year(value) {
    this.#year = this.#toNumber(value);
    this.#fix();
  }

  set months(value) {
    if (!value) return delete this.#custom.months;

    let isValidValue =
      Array.isArray(value) &&
      value.length === 12 &&
      value.every((array) => {
        return (
          Array.isArray(array) &&
          array.length === 2 &&
          array.every((string) => typeof string === "string")
        );
      });

    if (!isValidValue) return;

    this.#custom.months = value;
  }

  set month(value) {
    this.#month = this.#toNumber(value.valueOf()) - 1 ?? undefined;
    this.#fix();
  }

  set weekDays(value) {
    if (!value) return delete this.#custom.weekDays;

    let isValidValue =
      Array.isArray(value) &&
      value.length === 7 &&
      value.every((array) => {
        return (
          Array.isArray(array) &&
          array.length === 2 &&
          array.every((string) => typeof string === "string")
        );
      });

    if (!isValidValue) return;

    this.#custom.weekDays = value;
  }

  set digits(value) {
    if (!value) return delete this.#custom.digits;

    let isValidValue = Array.isArray(value) && value.length === 10;

    if (!isValidValue) return;

    this.#custom.digits = value;
  }

  set day(value) {
    this.#day = this.#toNumber(value);
    this.#fix();
  }

  set hour(value) {
    this.#hour = this.#toNumber(value);
    this.#fix();
  }

  set minute(value) {
    this.#minute = this.#toNumber(value);
    this.#fix();
  }

  set second(value) {
    this.#second = this.#toNumber(value);
    this.#fix();
  }

  set millisecond(value) {
    this.#millisecond = this.#toNumber(value);
    this.#fix();
  }

  set calendar(calendar) {
    this.convert(calendar);
  }

  set locale(locale = en) {
    if (this.#isObject(locale)) this.#locale = locale;
  }

  set _format(format) {
    if (typeof format === "string") this.#format = format;
  }

  set ignoreList(ignoreList) {
    if (Array.isArray(ignoreList)) this.#ignoreList = ignoreList;
  }

  set date(date) {
    this.setDate(date);
  }

  #toNumber = (value) => {
    if (!isNaN(value)) return parseInt(value);
  };
}

module.exports = DateObject;
