const indian = {
  name: "indian",
  startYear: 0,
  yearLength: 365,
  epoch: 1749628,
  century: 19,
  weekStartDayIndex: 1,
  getMonthLengths(isLeap) {
    return [isLeap ? 31 : 30, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30];
  },
  isLeap(year) {
    /**
     * To determine leap years, add 78 to the Saka year -
     * if the result is a leap year in the Gregorian calendar,
     * then the Saka year is a leap year as well.
     * @see https://en.wikipedia.org/w/index.php?title=Indian_national_calendar&oldid=360117718
     */

    year += 78;

    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  },
  getLeaps(currentYear) {
    let year = 0;

    let leaps = [],
      condition = () =>
        currentYear > 0 ? year <= currentYear : currentYear <= year,
      increase = () => (currentYear > 0 ? year++ : year--);

    while (condition()) {
      if (this.isLeap(year)) leaps.push(year);

      increase();
    }

    return leaps;
  },
  getDayOfYear({ year, month: { number: month }, day }) {
    let monthLengths = this.getMonthLengths(this.isLeap(year));

    for (let i = 0; i < month - 1; i++) day += monthLengths[i];

    return day;
  },
  getAllDays(date) {
    const { year } = date;

    return (
      this.yearLength * year +
      (this.leapsLength(year + 78) - this.leapsLength(78)) +
      this.getDayOfYear(date)
    );
  },
  leapsLength(year) {
    return (
      (((year - 1) / 4) | 0) +
      (-((year - 1) / 100) | 0) +
      (((year - 1) / 400) | 0)
    );
  },
  guessYear(days, currentYear) {
    let year = ~~(days / 365.24);

    return year + (currentYear > 0 ? 1 : -1);
  },
};

module.exports = indian;
