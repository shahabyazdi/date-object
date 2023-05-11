const DateObject = require("../index");

const gregorian = require("../calendars/cjs/gregorian");
const persian = require("../calendars/cjs/persian");
const jalali = require("../calendars/cjs/jalali");
const arabic = require("../calendars/cjs/arabic");
const indian = require("../calendars/cjs/indian");
const julian = require("../calendars/cjs/julian");

const gregorian_en = require("../locales/cjs/gregorian_en");
const gregorian_pt_br = require("../locales/cjs/gregorian_pt_br");
const gregorian_fa = require("../locales/cjs/gregorian_fa");
const persian_en = require("../locales/cjs/persian_en");
const indian_hi = require("../locales/cjs/indian_hi");

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const short_months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

describe("current moment", () => {
  test("year month day day-of-week hour minute second", () => {
    const dateObject = new DateObject();
    const date = new Date();

    expect(dateObject.year).toEqual(date.getFullYear());
    expect(dateObject.month.index).toEqual(date.getMonth());
    expect(dateObject.day).toEqual(date.getDate());
    expect(dateObject.weekDay.index).toEqual(date.getDay());
    expect(dateObject.hour).toEqual(date.getHours());
    expect(dateObject.minute).toEqual(date.getMinutes());
    expect(dateObject.second).toEqual(date.getSeconds());
  });

  test("converting current moment to all calendars", () => {
    const date = new Date();
    const dateObject = new DateObject(date);

    dateObject
      .convert(persian)
      .convert(arabic)
      .convert(indian)
      .convert(julian)
      .convert(gregorian);

    expect(dateObject.year).toEqual(date.getFullYear());
    expect(dateObject.month.index).toEqual(date.getMonth());
    expect(dateObject.day).toEqual(date.getDate());
    expect(dateObject.weekDay.index).toEqual(date.getDay());
    expect(dateObject.hour).toEqual(date.getHours());
    expect(dateObject.minute).toEqual(date.getMinutes());
    expect(dateObject.second).toEqual(date.getSeconds());
    expect(dateObject.millisecond).toEqual(date.getMilliseconds());
  });
});

describe("converting some dates", () => {
  const calendars = [persian, arabic, julian];

  const dates = [
    { gregorian: "3000/08/31", persian: "2379/06/09", arabic: "2452/02/08", julian: "3000/08/10" },
    { gregorian: "2847/12/20", persian: "2226/09/29", arabic: "2294/09/21", julian: "2847/12/01" },
    { gregorian: "2021/06/02", persian: "1400/03/12", arabic: "1442/10/21", julian: "2021/05/20" },
    { gregorian: "2008/11/27", persian: "1387/09/07", arabic: "1429/11/28", julian: "2008/11/14" },
    { gregorian: "1873/04/01", persian: "1252/01/12", arabic: "1290/02/02", julian: "1873/03/20" },
    { gregorian: "1211/05/14", persian: "590/02/24", arabic: "607/11/22", julian: "1211/05/07" },
    { gregorian: "650/07/22", persian: "29/04/31", arabic: "29/11/14", julian: "650/07/19" },
  ];

  calendars.forEach((calendar) => {
    dates.forEach(({ gregorian: strDate, ...object }) => {
      test(`converting ${strDate} from gregorian to ${calendar.name}`, () => {
        const date = new Date(strDate);
        const dateObject = new DateObject(strDate).convert(calendar);

        expect(dateObject.format()).toEqual(object[calendar.name]);
        expect(dateObject.valueOf()).toEqual(date.valueOf());
      });
    });
  });

  test("converting 2020/10/31 to all calendars", () => {
    const date = new DateObject("2020/10/31");

    expect(date.format()).toEqual("2020/10/31");

    date.convert(persian);

    expect(date.format()).toEqual("1399/08/10");

    date.convert(jalali);

    expect(date.format()).toEqual("1399/08/10");

    date.convert(arabic);

    expect(date.format()).toEqual("1442/03/14");

    date.convert(indian);

    expect(date.format()).toEqual("1942/08/09");

    date.convert(julian);

    expect(date.format()).toEqual("2020/10/18");
  });
});

describe("new instance", () => {
  test("from number (current moment)", () => {
    const date = new Date();
    const dateObject = new DateObject(date.valueOf());

    expect(dateObject.year).toEqual(date.getFullYear());
    expect(dateObject.month.index).toEqual(date.getMonth());
    expect(dateObject.day).toEqual(date.getDate());
    expect(dateObject.weekDay.index).toEqual(date.getDay());
    expect(dateObject.hour).toEqual(date.getHours());
    expect(dateObject.minute).toEqual(date.getMinutes());
    expect(dateObject.second).toEqual(date.getSeconds());
  });

  test("from number (21 August 2020)", () => {
    const date = new Date(2020, 7, 21, 11, 55, 36);
    const dateObject = new DateObject(date);

    expect(dateObject.year).toEqual(date.getFullYear());
    expect(dateObject.month.index).toEqual(date.getMonth());
    expect(dateObject.day).toEqual(date.getDate());
    expect(dateObject.weekDay.index).toEqual(date.getDay());
    expect(dateObject.hour).toEqual(date.getHours());
    expect(dateObject.minute).toEqual(date.getMinutes());
    expect(dateObject.second).toEqual(date.getSeconds());

    expect(dateObject.format("dddd DD MMMM YYYY @ hh:mm:ss.SSS a")).toEqual(
      "Friday 21 August 2020 @ 11:55:36.000 am"
    );
  });

  test("from iso string", () => {
    const date = new Date();
    const dateObject = new DateObject(date.toISOString());

    expect(dateObject.year).toEqual(date.getFullYear());
    expect(dateObject.month.index).toEqual(date.getMonth());
    expect(dateObject.day).toEqual(date.getDate());
    expect(dateObject.weekDay.index).toEqual(date.getDay());
    expect(dateObject.hour).toEqual(date.getHours());
    expect(dateObject.minute).toEqual(date.getMinutes());
    expect(dateObject.second).toEqual(date.getSeconds());
    expect(dateObject.millisecond).toEqual(date.getMilliseconds());
  });

  test("parse from string", () => {
    const date = new Date();
    const dateObject = new DateObject(
      `${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}}`
    );

    expect(dateObject.year).toEqual(date.getFullYear());
    expect(dateObject.month.index).toEqual(date.getMonth());
    expect(dateObject.day).toEqual(date.getDate());
    expect(dateObject.weekDay.index).toEqual(date.getDay());
    expect(dateObject.hour).toEqual(date.getHours());
    expect(dateObject.minute).toEqual(date.getMinutes());
    expect(dateObject.second).toEqual(date.getSeconds());
    expect(dateObject.millisecond).toEqual(date.getMilliseconds());
  });

  test("parse from string whith month name", () => {
    const date = new Date();
    const dateObject = new DateObject(
      `${date.getFullYear()}/${
        months[date.getMonth()]
      }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}}`
    );

    expect(dateObject.year).toEqual(date.getFullYear());
    expect(dateObject.month.index).toEqual(date.getMonth());
    expect(dateObject.day).toEqual(date.getDate());
    expect(dateObject.weekDay.index).toEqual(date.getDay());
    expect(dateObject.hour).toEqual(date.getHours());
    expect(dateObject.minute).toEqual(date.getMinutes());
    expect(dateObject.second).toEqual(date.getSeconds());
    expect(dateObject.millisecond).toEqual(date.getMilliseconds());
  });

  test("parse from string whith month short name", () => {
    const date = new Date();
    const dateObject = new DateObject(
      `${date.getFullYear()}/${
        short_months[date.getMonth()]
      }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}}`
    );

    expect(dateObject.year).toEqual(date.getFullYear());
    expect(dateObject.month.index).toEqual(date.getMonth());
    expect(dateObject.day).toEqual(date.getDate());
    expect(dateObject.weekDay.index).toEqual(date.getDay());
    expect(dateObject.hour).toEqual(date.getHours());
    expect(dateObject.minute).toEqual(date.getMinutes());
    expect(dateObject.second).toEqual(date.getSeconds());
    expect(dateObject.millisecond).toEqual(date.getMilliseconds());
  });

  test("parse from string whith diffrent format", () => {
    const date = new Date();
    const dateObject = new DateObject({
      date: `${
        short_months[date.getMonth()]
      } -> ${date.getFullYear()} -> ${date.getDate()} ${date.getSeconds()}<${date.getMinutes()}:${date.getHours()} ${
        date.getHours() > 12 ? "PM" : "AM"
      } ${date.getMilliseconds()}`,
      format: "MMM -> YYYY -> DD ss<mm:hh A SSS",
    });

    expect(dateObject.year).toEqual(date.getFullYear());
    expect(dateObject.month.index).toEqual(date.getMonth());
    expect(dateObject.day).toEqual(date.getDate());
    expect(dateObject.weekDay.index).toEqual(date.getDay());
    expect(dateObject.hour).toEqual(date.getHours());
    expect(dateObject.minute).toEqual(date.getMinutes());
    expect(dateObject.second).toEqual(date.getSeconds());
    expect(dateObject.millisecond).toEqual(date.getMilliseconds());
  });
});

describe("other methods", () => {
  test("formatting current moment", () => {
    const date = new Date();
    const dateObject = new DateObject(date);

    const year = date.getFullYear();
    const month = date.getMonth();
    const weekDay = date.getDay();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    expect(dateObject.format("MMMMDYYYYHms")).toEqual(
      `${dateObject.months[month].name}${day}${year}${hour}${minute}${second}`
    );

    expect(dateObject.format("dddd D MMM YYYY")).toEqual(
      `${dateObject.weekDays[weekDay].name} ${day} ${dateObject.months[month].shortName} ${year}`
    );
  });

  test("adding values to a specific moment", () => {
    const date = new DateObject("2020/10/07 5:35:24 pm");

    date.setFormat("YYYY/MM/DD hh:mm:ss.SSS");

    expect(date.add(2, "years").format()).toEqual("2022/10/07 05:35:24.000");
    expect(date.add("1", "month").format()).toEqual("2022/11/07 05:35:24.000");
    expect(date.add(3, "d").format()).toEqual("2022/11/10 05:35:24.000");
    expect(date.add(4, "hours").format()).toEqual("2022/11/10 09:35:24.000");
    expect(date.add(1, "minute").format()).toEqual("2022/11/10 09:36:24.000");
    expect(date.add("20", "s").format()).toEqual("2022/11/10 09:36:44.000");
    expect(date.add(100, "milliseconds").format()).toEqual(
      "2022/11/10 09:36:44.100"
    );
  });

  test("setting values to a specific moment", () => {
    const date = new DateObject("2020/10/31");

    expect(date.set("year", 2021).format()).toEqual("2021/10/31");
    expect(date.set("month", 1).format()).toEqual("2021/01/31");
    expect(date.set("day", 7).format()).toEqual("2021/01/07");
    expect(date.set("format", "MM/DD/YYYY").format()).toEqual("01/07/2021");
    expect(date.set("calendar", indian).format()).toEqual("10/17/1942");
    expect(date.set("locale", indian_hi).format()).toEqual("१०/१७/१९४२");
    expect(
      date
        .set({
          date: new Date("2020/10/31"),
          locale: gregorian_en,
          format: "YYYY/MM/DD",
        })
        .format()
    ).toEqual("2020/10/31");
    expect(
      date
        .set(
          "date",
          new DateObject({
            calendar: persian,
            locale: persian_en,
            date: "1399/08/10",
          })
        )
        .format()
    ).toEqual("1399/08/10");
    expect(
      date
        .set({
          calendar: gregorian,
          locale: gregorian_en,
          year: 2020,
          month: 11,
          day: 12,
        })
        .format()
    ).toEqual("2020/11/12");
  });

  test("converting date to UTC", () => {
    const DateObject = require("date-object");

    const date = new Date();
    const dateObject = new DateObject({
      date,
      format: "ddd, DD MMM YYYY HH:mm:ss GMT",
      ignoreList: ["GMT"],
    });

    expect(date.toUTCString()).toEqual(dateObject.toUTC().toString());
  });

  test("valueOf()", () => {
    const DateObject = require("date-object");

    const $gregorian = new DateObject(1604824018304);
    const $arabic = new DateObject({ date: $gregorian, calendar: arabic });
    const $indian = new DateObject({ date: $gregorian, calendar: indian });
    const $persian = new DateObject({ date: $gregorian, calendar: persian });
    const $julian = new DateObject({ date: $gregorian, calendar: julian });

    expect(`${$gregorian.valueOf()} ${$gregorian.format()}`).toEqual(
      "1604824018304 2020/11/08"
    );

    expect(`${$persian.valueOf()} ${$persian.format()}`).toEqual(
      "1604824018304 1399/08/18"
    );

    expect(`${$indian.valueOf()} ${$indian.format()}`).toEqual(
      "1604824018304 1942/08/17"
    );

    expect(`${$arabic.valueOf()} ${$arabic.format()}`).toEqual(
      "1604824018304 1442/03/22"
    );

    expect(`${$julian.valueOf()} ${$julian.format()}`).toEqual(
      "1604824018304 2020/10/26"
    );

    expect($persian - $gregorian).toEqual(0);
  });
});

describe("testing private #fix() method", () => {
  const string = "2021/01/01 00:00:00.000";
  const getStringDate = (date) => `
      ${date.getFullYear()}
      ${date.getMonth()}
      ${date.getDate()}
      ${date.getHours()}
      ${date.getMinutes()}
      ${date.getSeconds()}
      ${date.getMilliseconds()}
    `;
  const getStringDateObject = (dateObject) => `
      ${dateObject.year}
      ${dateObject.month.index}
      ${dateObject.day}
      ${dateObject.hour}
      ${dateObject.minute}
      ${dateObject.second}
      ${dateObject.millisecond}
    `;

  test("millisecond", () => {
    for (let i = 0; i < 10; i++) {
      const value = Math.floor(Math.random() * 100000000000000);
      const date = new Date(string);
      const dateObject = new DateObject(string);

      date.setMilliseconds(value);
      dateObject.setMillisecond(value);

      expect(getStringDate(date)).toEqual(getStringDateObject(dateObject));
    }
  });

  test("second", () => {
    for (let i = 0; i < 10; i++) {
      const value = Math.floor(Math.random() * 1000000000000);
      const date = new Date(string);
      const dateObject = new DateObject(string);

      date.setSeconds(value);
      dateObject.setSecond(value);

      expect(getStringDate(date)).toEqual(getStringDateObject(dateObject));
    }
  });

  test("minute", () => {
    for (let i = 0; i < 10; i++) {
      const value = Math.floor(Math.random() * 10000000000);
      const date = new Date(string);
      const dateObject = new DateObject(string);

      date.setMinutes(value);
      dateObject.setMinute(value);

      expect(getStringDate(date)).toEqual(getStringDateObject(dateObject));
    }
  });

  test("hour", () => {
    for (let i = 0; i < 10; i++) {
      const value = Math.floor(Math.random() * 10000000);
      const date = new Date(string);
      const dateObject = new DateObject(string);

      date.setHours(value);
      dateObject.setHour(value);

      expect(getStringDate(date)).toEqual(getStringDateObject(dateObject));
    }
  });

  test("day", () => {
    for (let i = 0; i < 10; i++) {
      const value = Math.floor(Math.random() * 1000000);
      const date = new Date(string);
      const dateObject = new DateObject(string);

      date.setDate(value);
      dateObject.setDay(value);

      expect(getStringDate(date)).toEqual(getStringDateObject(dateObject));
    }
  });

  test("month", () => {
    for (let i = 0; i < 10; i++) {
      const value = Math.floor(Math.random() * 1000);
      const date = new Date(string);
      const dateObject = new DateObject(string);

      date.setMonth(value - 1);
      dateObject.setMonth(value);

      expect(getStringDate(date)).toEqual(getStringDateObject(dateObject));
    }
  });
});

describe("returning to default calendar & locale (gregorian, gregorian_en)", () => {
  test("Returning to the default calendar by setting the calendar value to 'undefined'", () => {
    const dateObject = new DateObject({ calendar: persian });
    const date = new Date();
    const stringDate = `${date.getFullYear()}${
      date.getMonth() + 1
    }${date.getDate()}`;

    expect(dateObject.calendar.name).toEqual("persian");

    dateObject.calendar = undefined;

    expect(dateObject.calendar.name).toEqual("gregorian");
    expect(dateObject.format("YYYYMD")).toEqual(stringDate);
  });

  test("Returning to the default calendar by passing 'undefined' as calendar argument in the convert method", () => {
    const dateObject = new DateObject({ calendar: arabic });
    const date = new Date();
    const stringDate = `${date.getFullYear()}${
      date.getMonth() + 1
    }${date.getDate()}`;

    expect(dateObject.calendar.name).toEqual("arabic");

    dateObject.convert();

    expect(dateObject.calendar.name).toEqual("gregorian");
    expect(dateObject.format("YYYYMD")).toEqual(stringDate);
  });

  test("Returning to the default calendar with set method", () => {
    const dateObject = new DateObject({ calendar: indian });
    const date = new Date();
    const stringDate = `${date.getFullYear()}${
      date.getMonth() + 1
    }${date.getDate()}`;

    expect(dateObject.calendar.name).toEqual("indian");

    dateObject.set({ calendar: undefined });

    expect(dateObject.calendar.name).toEqual("gregorian");
    expect(dateObject.format("YYYYMD")).toEqual(stringDate);
  });

  test("Returning to the default locale by setting the locale value to 'undefined'", () => {
    const dateObject = new DateObject({ locale: gregorian_fa });

    expect(dateObject.locale.name).toEqual("gregorian_fa");

    dateObject.locale = undefined;

    expect(dateObject.locale.name).toEqual("gregorian_en");
  });

  test("Returning to the default locale with set method", () => {
    const dateObject = new DateObject({ locale: gregorian_fa });
    const date = new Date();
    const stringDate = `${date.getFullYear()}${
      date.getMonth() + 1
    }${date.getDate()}`;

    expect(dateObject.locale.name).toEqual("gregorian_fa");

    dateObject.set({ locale: undefined });

    expect(dateObject.locale.name).toEqual("gregorian_en");
    expect(dateObject.format("YYYYMD")).toEqual(stringDate);
  });
});

describe("runing calendar with locale set to gregorian_pt_br", () => {
  test("should set locale gregorian_pt_br & calendar gregorian", () => {
    const dateObject = new DateObject({
      calendar: gregorian,
      locale: gregorian_pt_br,
    });

    expect(dateObject.calendar.name).toEqual("gregorian");
    expect(dateObject.locale.name).toEqual("gregorian_pt_br");
  });

  test("should return month equal 'Janeiro'", () => {
    const date = new Date(1579618536000);
    const dateObject = new DateObject({
      date,
      calendar: gregorian,
      locale: gregorian_pt_br,
    });
    const fullMonthName = "Janeiro";

    expect(dateObject.month.name).toEqual(fullMonthName);
  });

  test("should return from number (15 Agosto 1989)", () => {
    const date = new Date(1989, 7, 15, 11, 0, 0);
    const dateObject = new DateObject({
      date,
      date,
      calendar: gregorian,
      locale: gregorian_pt_br,
    });

    expect(dateObject.year).toEqual(date.getFullYear());
    expect(dateObject.month.index).toEqual(date.getMonth());
    expect(dateObject.day).toEqual(date.getDate());
    expect(dateObject.weekDay.index).toEqual(date.getDay());
    expect(dateObject.hour).toEqual(date.getHours());
    expect(dateObject.minute).toEqual(date.getMinutes());
    expect(dateObject.second).toEqual(date.getSeconds());

    expect(dateObject.format("dddd DD MMMM YYYY @ hh:mm:ss.SSS a")).toEqual(
      "Terça-feira 15 Agosto 1989 @ 11:00:00.000 am"
    );
  });
});
