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
```
