# Date Object

## example

```javascript
var date = new DateObject();

date.format(); //2020/08/20
date.format("DD/MM/YYYY"); //20/08/2020
date.isLeap; //true
date.year; //2020
date.month; //object { name: 'August', shortName: 'Aug', length: 31, ...}
date.day; //20
date.weekDay; //object { name: 'Thursday', shortName: 'Thu', index: 4, number: 5, ...}
date.hour; //20
date.minute; //08
date.second; //14
date.millisecond; //77

date = new DateObject("2020/08/20 12:00:00.000");

date.year += 1;
date.month += 1;
date.day += 1;

date.format(); //2021/09/21

date = new DateObject({
  year: 2020,
  month: 8,
  day: 20,
});

date.toFirstOfWeek(); //2020/08/16
date.toFirstOfMonth(); //2020/08/01
date.toFirstOfYear(); //2020/01/01
date.toFirstWeekOfYear(); //2020/01/05
date.toLastOfMonth(); //2020/08/31
date.toLastOfWeek(); //2020/08/22
date.toLastOfYear(); //2020/12/31
date.toLastWeekOfYear(); //2020/12/27
```

## using calendars, format & locals

```javascript
var date = new DateObject({ calendar: "georgian", format: "dddd DD MMMM" });

date.format(); //Thursday 20 August

date.calendar = "persian"; //Panjshanbeh 30 Mordad
date.local = "fa"; //پنچشنبه 30 مرداد
date._format = "YY/MM/DD"; //۹۹/۰۵/۳۰

date.setCalendar("georgian").setLocal("en"); //20/08/20

date = new DateObject(new Date());

date.convert("persian").format(); //1399/05/30
```

## other

```javascript
var today = new DateObject();
var yesterday = new DateObject(today).setDay(today.day - 1);

console.log(`${yesterday.year}/${yesterday.month}/${yesterday.day}`); //2020/8/19

today.month.name; //August
today.month.length; //31
today.month.index; //7
today.month.number; //8

today.weekDay.name; //Thursday
today.weekDay.index; //4
today.weekDay.number; //5

today.dayOfBeginning; //737657
today.dayOfYear; //233
today.weekOfYear; //34

today.weeks; // array [{ name: 'Sunday', shortName: 'Sun', ...}]
today.months; //array [{ name: 'January', shortName: 'Jan', ...}]
today.leaps; //array [4,   8,  12,  16,  20,...]
```
