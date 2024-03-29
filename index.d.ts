export type DateType = Date | number | string | DateObject;

export type Calendar = {
  name: string;
  /**
   * specifies what number the calendar year begins with.
   * some calendars start with year 0
   */
  startYear: number;
  yearLength: number;
  epoch: number;
  century: number;
  weekStartDayIndex: number;
  /**
   *
   * @param isLeap
   *
   * return an array containing the number of days in each month.
   */
  getMonthLengths(isLeap: boolean): number[];
  isLeap(year: number): boolean;
  /**
   *
   * @param currentYear
   *
   * returns all leap years including the current year
   * (if the current year is a leap year).
   */
  getLeaps(currentYear: number): number[] | [];
  getDayOfYear(date: DateObject): number;
  getAllDays(date: DateObject): number;
  /**
   *
   * @param year
   *
   * Returns the number of leap years before the specified year.
   */
  leapsLength?(year: number): number;
  guessYear(days: number, currentYear: number): number;
};

export type Locale = {
  name: string;
  months: [string[]];
  weekDays: [string[]];
  digits: string[];
  meridiems: [string[]];
};

export type Month = {
  name: string;
  shortName: string;
  number: number;
  index: number;
  /**
   * specifies the number of days in this month.
   */
  length: number;
  valueOf(): number;
  toString(): string;
};

export type WeekDay = Omit<Month, "length">;

export type Meridiem = {
  name: string;
  shortName: string;
};

type ObjectType = {
  year: number | undefined;
  month: Month | undefined;
  day: number | undefined;
  weekDay: WeekDay | undefined;
  hour: number | undefined;
  minute: number | undefined;
  second: number | undefined;
  millisecond: number | undefined;
  weekOfYear: number | undefined;
  dayOfYear: number | undefined;
  daysLeft: number | undefined;
  calendar: Calendar;
  locale: Locale;
  format: string | undefined;
  ignoreList: string[];
};

export class DateObject {
  constructor();
  constructor(object: {
    year: number;
    month: number;
    day: number;
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
    calendar?: Calendar;
    locale?: Locale;
    format?: string;
    ignoreList?: string[];
  });
  constructor(object: {
    date?: DateType;
    calendar?: Calendar;
    locale?: Locale;
    format?: string;
    ignoreList?: string[];
  });
  constructor(date: DateType);

  /**
   * Parse string from the given formatting token.
   * Default formatting token: "YYYY MM DD hh mm ss SSS a".
   *
   * If you do not specify a formatting token, The default token is considered.
   * @param date
   * @example
   * var date = new DateObject();
   *
   * date.setFormat("dddd DD MMMM YYYY");
   * date.parse("Monday 24 August 2020");
   */
  parse(date: string): this;

  convert(calendar: Calendar | undefined, locale?: Locale): this;
  /**
   * Formatting current time from given token.
   * Default token is "YYYY/MM/DD".
   *
   * If you do not specify a formatting token, The default token is considered.
   * @param format
   * @param ignoreList
   * @example
   * var date = new DateObject();
   *
   * date.format(); //2020/12/02
   * date.format("MM/DD/YYYY"); //12/02/2020
   *
   * @example
   * Ignoring `Date` & `Time`
   *
   * var date = new DateObject();
   *
   * date.format("Date:MM/DD/YYYY Time:HH:mm:ss", ["Date", "Time"]); //Date:12/02/2020 Time:11:03:12
   */
  format(format?: string, ignoreList?: string[]): string;
  getValue(key: string): number | string;

  setYear(year: number): this;
  /**
   * Use this method if you want to specify the names of the months manually.
   *
   * @param months
   * @example
   *
   * var Date = new DateObject()
   *
   * date.setMonths([
   *  ["jan", "j"],
   *  ["feb", "f"],
   *  ["mar", "m"],
   *  ["apr", "a"],
   *  ["may", "m"],
   *  ["jun", "j"],
   *  ["jul", "j"],
   *  ["aug", "a"],
   *  ["sep", "s"],
   *  ["oct", "o"],
   *  ["nov", "n"],
   *  ["dec", "d"],
   * ])
   *
   * date.format("MMMM MMM") //dec d
   */
  setMonths(months: [string[]]): this;
  setMonth(month: number): this;
  /**
   * Use this method if you want to specify the names of week days manually.
   *
   * @param weekDays
   * @example
   *
   * var Date = new DateObject()
   *
   * date.setWeekDays([
   *  ["su", "s"],
   *  ["mo", "m"],
   *  ["tu", "t"],
   *  ["we", "w"],
   *  ["th", "t"],
   *  ["fr", "f"],
   *  ["sa", "s"],
   * ])
   *
   * date.format("dddd ddd") //su s
   */
  setWeekDays(weekDays: [string[]]): this;
  setDigits(digits: string[]): this;
  /**
   * @param dayOfMonth
   */
  setDay(day: number): this;
  setHour(hour: number): this;
  setMinute(minute: number): this;
  setSecond(second: number): this;
  setMillisecond(millisecond: number): this;
  /**
   *
   * @param formattingToken
   * @example
   * var date = new DateObject()
   *
   * date.setFormat("dddd MMMM YYYY")
   *
   * date.format() //Sunday December 2020
   */
  setFormat(format?: string): this;
  setLocale(locale: Locale): this;
  setCalendar(calendar: Calendar | undefined): this;
  setDate(date: DateType): this;
  set(key: string, value: any): this;

  set(obj: {
    date?: DateType;
    year?: number;
    month?: number;
    months?: [string[]];
    weekDays?: [string[]];
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
    calendar?: Calendar;
    locale?: Locale;
    format?: string;
    ignoreList?: string[];
    digits?: string[];
  }): this;
  /**
   * Availbe Types:
   *  - `years` `year` `y`
   *  - `months` `month` `M`
   *  - `days` `day` `d`
   *  - `hours` `hour` `h`
   *  - `minutes` `minute` `m`
   *  - `seconds` `second` `s`
   *  - `milliseconds` `millisecond` `ms`
   *
   * @param duration
   * @param type
   * @example
   *
   * var tomorrow = new DateObject().add(1, "day")
   */
  add(duration: number | string, type: string): this;
  /**
   * Availbe Types:
   *  - `years` `year` `y`
   *  - `months` `month` `M`
   *  - `days` `day` `d`
   *  - `hours` `hour` `h`
   *  - `minutes` `minute` `m`
   *  - `seconds` `second` `s`
   *  - `milliseconds` `millisecond` `ms`
   *
   * @param duration
   * @param type
   * @example
   *
   * var yesterday = new DateObject().subtract(1, "day")
   */
  subtract(duration: number | string, type: string): this;

  toFirstOfYear(): this;
  toLastOfYear(): this;
  toFirstOfMonth(): this;
  toLastOfMonth(): this;
  toFirstOfWeek(): this;
  toLastOfWeek(): this;
  toFirstWeekOfYear(): this;
  toLastWeekOfYear(): this;

  toString(): string;
  /**
   * convert current calendar to JavaScript Date
   */
  toDate(): Date;
  /**
   * convert current calendar to UTC
   */
  toUTC(): this;
  /**
   * Unix time in seconds
   */
  toUnix(): number;
  toJulianDay(): number;
  toObject(): ObjectType;
  toJSON(): number;
  /**
   * Unix time in milliseconds
   */
  valueOf(): number;

  /**
   * Count number of days passed from 1/1/1 (0/1/1 in indian calendar)
   */
  toDays(): number;
  /**
   * Count number of days passed from current year
   */
  dayOfYear: number;
  /**
   * Count number of weeks passed from current year
   */
  weekOfYear: number;
  /**
   * Number of days remaining from current year
   */
  daysLeft: number;
  /**
   * @get current year
   * @set year
   */
  year: number;
  /**
   * @get object (Month of year in current locale)
   * @example { name: "January", shortName: "Jan", index: 0, number: 1 }
   * @set number 1-12
   */
  get month(): Month;
  // set month(month: number);
  get monthIndex(): number;
  /**
   * Day of month
   * @get number
   * @set number
   */
  day: number;
  /**
   * Day of week in current locale
   * @get object
   * @example { name: "Sunday", shortName: "Sun", index: 0, number: 1  }
   */
  get weekDay(): WeekDay;
  /**
   * @get current hour
   * @set hour
   */
  hour: number;
  /**
   * @get current minute
   * @set minute
   */
  minute: number;
  /**
   * @get current second
   * @set second
   */
  second: number;
  /**
   * @get current millisecond
   * @set millisecond
   */
  millisecond: number;
  /**
   * @get Array of months in current locale
   * @example [{ name: "January", shortName: "Jan", index: 0, number: 1 }, ...]
   * @set custom months
   * @example [["name1" , "shortName1"], ["name2" , "shortName2"] ...]
   * @example
   *
   * var Date = new DateObject()
   *
   * date.months = [
   *  ["jan", "j"],
   *  ["feb", "f"],
   *  ["mar", "m"],
   *  ["apr", "a"],
   *  ["may", "m"],
   *  ["jun", "j"],
   *  ["jul", "j"],
   *  ["aug", "a"],
   *  ["sep", "s"],
   *  ["oct", "o"],
   *  ["nov", "n"],
   *  ["dec", "d"],
   * ]
   *
   * date.format("MMMM MMM") //dec d
   */
  get months(): Month[];
  // set months(months: string[]);
  /**
   * @get Array of week days in current locale
   * @example [{ name: "Sunday", shortName: "Sun", index: 0, number: 1 }, ...]
   * @set custom week days
   * @example [["name1" , "shortName1"], ["name2" , "shortName2"] ...]
   * @example
   *
   * var Date = new DateObject()
   *
   * date.setWeekDays([
   *  ["su", "s"],
   *  ["mo", "m"],
   *  ["tu", "t"],
   *  ["we", "w"],
   *  ["th", "t"],
   *  ["fr", "f"],
   *  ["sa", "s"],
   * ])
   *
   * date.format("dddd ddd") //su s
   */
  get weekDays(): WeekDay[];
  // set weekDays(weekDays: string[]);
  /**
   * Array of leap years until now
   *
   * @example
   *
   * var date = new DateObject()
   *
   * date.leaps //[4, 8, 12, 16, 20, ...]
   */
  leaps: number[];

  get calendar(): Calendar;
  set calendar(calendar: Calendar);

  get locale(): Locale;
  set locale(locale: Locale);
  /**
   * @get meridiems in current locale
   * @example
   *
   * var date = new DateObject()
   *
   * date.meridiems //[{ name: "AM", shortName: "am" }, { name: "PM", shortName: "pm" }]
   */
  get meridiems(): Meridiem[];
  /**
   * Array of locale numbers from 0 to 9
   */
  digits: string[];
  /**
   * @get current formatting token
   * @set formatting token
   * @default "YYYY/MM/DD"
   *
   * var date = new DateObject()
   *
   * date._format = "dddd MMMM YYYY"
   *
   * date.format() //Sunday December 2020
   */
  _format: string;
  /**
   * @get true if current year is leap
   */
  isLeap: boolean;
  /**
   * @get true if the year, month and day are correct
   */
  isValid: boolean;
  isUTC: boolean;
  /**
   * @get Unix time in seconds
   */
  unix: number;
  /**
   * formatting ignore list
   *
   * @example
   * var date = new DateObject()
   *
   * date._format = "Date:MM/DD/YYYY"
   * date.ignoreList = ["Date"]
   *
   * date.format() //Date:12/04/2020
   *
   * @example
   * var date = new DateObject({
   *   format: "Date:MM/DD/YYYY",
   *   ignoreList: ["Date"]
   * })
   *
   * date.format() //Date:12/04/2020
   * date.format("time:hh:mm a", ["time"]) //time:06:50 pm
   */
  ignoreList: string[];
  custom: {
    digits: string[] | undefined;
    months: string[] | undefined;
    weekDays: string[] | undefined;
  };
  set date(date: DateType);
  weekStartDayIndex: number;
}

declare module "date-object" {
  export = DateObject;
}

declare module "date-object/calendars/cjs/gregorian" {
  const gregorian: Calendar;

  export = gregorian;
}

declare module "date-object/calendars/cjs/persian" {
  const persian: Omit<Calendar, "leapsLength">;

  export = persian;
}

declare module "date-object/calendars/cjs/jalali" {
  const jalali: Calendar;

  export = jalali;
}

declare module "date-object/calendars/cjs/arabic" {
  const arabic: Calendar;

  export = arabic;
}

declare module "date-object/calendars/cjs/indian" {
  const indian: Calendar;

  export = indian;
}

declare module "date-object/calendars/cjs/julian" {
  const julian: Calendar;

  export = julian;
}

declare module "date-object/locales/cjs/gregorian_en" {
  const gregorian_en: Locale;

  export = gregorian_en;
}

declare module "date-object/locales/cjs/gregorian_fa" {
  const gregorian_fa: Locale;

  export = gregorian_fa;
}

declare module "date-object/locales/cjs/gregorian_ar" {
  const gregorian_ar: Locale;

  export = gregorian_ar;
}

declare module "date-object/locales/cjs/gregorian_hi" {
  const gregorian_hi: Locale;

  export = gregorian_hi;
}

declare module "date-object/locales/cjs/gregorian_pt_br" {
  const gregorian_pt_br: Locale;

  export default gregorian_pt_br;
}

declare module "date-object/locales/cjs/persian_en" {
  const persian_en: Locale;

  export = persian_en;
}

declare module "date-object/locales/cjs/persian_fa" {
  const persian_fa: Locale;

  export = persian_fa;
}

declare module "date-object/locales/cjs/persian_ar" {
  const persian_ar: Locale;

  export = persian_ar;
}

declare module "date-object/locales/cjs/persian_hi" {
  const persian_hi: Locale;

  export = persian_hi;
}

declare module "date-object/locales/cjs/arabic_en" {
  const arabic_en: Locale;

  export = arabic_en;
}

declare module "date-object/locales/cjs/arabic_fa" {
  const arabic_fa: Locale;

  export = arabic_fa;
}

declare module "date-object/locales/cjs/arabic_ar" {
  const arabic_ar: Locale;

  export = arabic_ar;
}

declare module "date-object/locales/cjs/arabic_hi" {
  const arabic_hi: Locale;

  export = arabic_hi;
}

declare module "date-object/locales/cjs/indian_en" {
  const indian_en: Locale;

  export = indian_en;
}

declare module "date-object/locales/cjs/indian_fa" {
  const indian_fa: Locale;

  export = indian_fa;
}

declare module "date-object/locales/cjs/indian_ar" {
  const indian_ar: Locale;

  export = indian_ar;
}

declare module "date-object/locales/cjs/indian_hi" {
  const indian_hi: Locale;

  export = indian_hi;
}

declare module "date-object/calendars/es/gregorian" {
  const gregorian: Calendar;

  export = gregorian;
}

declare module "date-object/calendars/es/persian" {
  const persian: Omit<Calendar, "leapsLength">;

  export = persian;
}

declare module "date-object/calendars/es/jalali" {
  const jalali: Calendar;

  export = jalali;
}

declare module "date-object/calendars/es/arabic" {
  const arabic: Calendar;

  export = arabic;
}

declare module "date-object/calendars/es/indian" {
  const indian: Calendar;

  export = indian;
}

declare module "date-object/calendars/es/julian" {
  const julian: Calendar;

  export = julian;
}

declare module "date-object/locales/es/gregorian_en" {
  const gregorian_en: Locale;

  export = gregorian_en;
}

declare module "date-object/locales/es/gregorian_fa" {
  const gregorian_fa: Locale;

  export = gregorian_fa;
}

declare module "date-object/locales/es/gregorian_ar" {
  const gregorian_ar: Locale;

  export = gregorian_ar;
}

declare module "date-object/locales/es/gregorian_hi" {
  const gregorian_hi: Locale;

  export = gregorian_hi;
}

declare module "date-object/locales/es/persian_en" {
  const persian_en: Locale;

  export = persian_en;
}

declare module "date-object/locales/es/persian_fa" {
  const persian_fa: Locale;

  export = persian_fa;
}

declare module "date-object/locales/es/persian_ar" {
  const persian_ar: Locale;

  export = persian_ar;
}

declare module "date-object/locales/es/persian_hi" {
  const persian_hi: Locale;

  export = persian_hi;
}

declare module "date-object/locales/es/arabic_en" {
  const arabic_en: Locale;

  export = arabic_en;
}

declare module "date-object/locales/es/arabic_fa" {
  const arabic_fa: Locale;

  export = arabic_fa;
}

declare module "date-object/locales/es/arabic_ar" {
  const arabic_ar: Locale;

  export = arabic_ar;
}

declare module "date-object/locales/es/arabic_hi" {
  const arabic_hi: Locale;

  export = arabic_hi;
}

declare module "date-object/locales/es/indian_en" {
  const indian_en: Locale;

  export = indian_en;
}

declare module "date-object/locales/es/indian_fa" {
  const indian_fa: Locale;

  export = indian_fa;
}

declare module "date-object/locales/es/indian_ar" {
  const indian_ar: Locale;

  export = indian_ar;
}

declare module "date-object/locales/es/indian_hi" {
  const indian_hi: Locale;

  export = indian_hi;
}

declare module "date-object/calendars/umd/gregorian" {
  const gregorian: Calendar;

  export = gregorian;
}

declare module "date-object/calendars/umd/persian" {
  const persian: Omit<Calendar, "leapsLength">;

  export = persian;
}

declare module "date-object/calendars/umd/jalali" {
  const jalali: Calendar;

  export = jalali;
}

declare module "date-object/calendars/umd/arabic" {
  const arabic: Calendar;

  export = arabic;
}

declare module "date-object/calendars/umd/indian" {
  const indian: Calendar;

  export = indian;
}

declare module "date-object/calendars/umd/julian" {
  const julian: Calendar;

  export = julian;
}

declare module "date-object/locales/umd/gregorian_en" {
  const gregorian_en: Locale;

  export = gregorian_en;
}

declare module "date-object/locales/umd/gregorian_fa" {
  const gregorian_fa: Locale;

  export = gregorian_fa;
}

declare module "date-object/locales/umd/gregorian_ar" {
  const gregorian_ar: Locale;

  export = gregorian_ar;
}

declare module "date-object/locales/umd/gregorian_hi" {
  const gregorian_hi: Locale;

  export = gregorian_hi;
}

declare module "date-object/locales/umd/persian_en" {
  const persian_en: Locale;

  export = persian_en;
}

declare module "date-object/locales/umd/persian_fa" {
  const persian_fa: Locale;

  export = persian_fa;
}

declare module "date-object/locales/umd/persian_ar" {
  const persian_ar: Locale;

  export = persian_ar;
}

declare module "date-object/locales/umd/persian_hi" {
  const persian_hi: Locale;

  export = persian_hi;
}

declare module "date-object/locales/umd/arabic_en" {
  const arabic_en: Locale;

  export = arabic_en;
}

declare module "date-object/locales/umd/arabic_fa" {
  const arabic_fa: Locale;

  export = arabic_fa;
}

declare module "date-object/locales/umd/arabic_ar" {
  const arabic_ar: Locale;

  export = arabic_ar;
}

declare module "date-object/locales/umd/arabic_hi" {
  const arabic_hi: Locale;

  export = arabic_hi;
}

declare module "date-object/locales/umd/indian_en" {
  const indian_en: Locale;

  export = indian_en;
}

declare module "date-object/locales/umd/indian_fa" {
  const indian_fa: Locale;

  export = indian_fa;
}

declare module "date-object/locales/umd/indian_ar" {
  const indian_ar: Locale;

  export = indian_ar;
}

declare module "date-object/locales/umd/indian_hi" {
  const indian_hi: Locale;

  export = indian_hi;
}
