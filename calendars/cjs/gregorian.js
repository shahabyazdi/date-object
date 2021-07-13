const gregorian = {
  name: "gregorian",
  startYear: 1,
  yearLength: 365,
  epoch: 1721424,
  century: 20,
  weekStartDayIndex: 1,
  getMonthLengths(isLeap) {
    return [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  },
  isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  },
  getLeaps(currentYear) {
    if (currentYear === 0) return;

    let year = currentYear > 0 ? 1 : -1;

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
  getDayOfYear({ year, month, day }) {
    let monthLengths = this.getMonthLengths(this.isLeap(year));

    for (let i = 0; i < month.index; i++) {
      day += monthLengths[i];
    }

    return day;
  },
  getAllDays(date) {
    const { year } = date;

    return (
      this.yearLength * (year - 1) +
      this.leapsLength(year) +
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

module.exports = gregorian;
