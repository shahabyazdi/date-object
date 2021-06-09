const DateObject = require("../dist/cjs/date-object.es6");

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
      .convert("persian")
      .convert("arabic")
      .convert("indian")
      .convert("gregorian");

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
  const calendars = ["persian", "arabic"];

  const dates = [
    { gregorian: "3000/08/31", persian: "2379/06/09", arabic: "2452/02/08" },
    { gregorian: "2847/12/20", persian: "2226/09/29", arabic: "2294/09/21" },
    { gregorian: "2021/06/02", persian: "1400/03/12", arabic: "1442/10/21" },
    { gregorian: "2008/11/27", persian: "1387/09/07", arabic: "1429/11/28" },
    { gregorian: "1873/04/01", persian: "1252/01/12", arabic: "1290/02/02" },
    { gregorian: "1211/05/14", persian: "590/02/24", arabic: "607/11/22" },
  ];

  calendars.forEach((calendar) => {
    dates.forEach(({ gregorian: strDate, ...object }) => {
      test(`converting ${strDate} from gregorian to ${calendar}`, () => {
        const date = new Date(strDate);
        const dateObject = new DateObject(strDate).convert(calendar);

        expect(dateObject.format()).toEqual(object[calendar]);
        expect(dateObject.valueOf()).toEqual(date.valueOf());
      });
    });
  });
});

describe("new instance", () => {
  test("from number", () => {
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
    const months = [
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

  test("parse from string whith diffrent format", () => {
    const months = [
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
    const date = new Date();
    const dateObject = new DateObject({
      date: `${
        months[date.getMonth()]
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
