const arabic = {
  name: "arabic",
  startYear: 1,
  yearLength: 354,
  epoch: 1948438,
  century: 14,
  weekStartDayIndex: 0,
  getMonthLengths(isLeap) {
    /**
     * @see https://en.wikipedia.org/wiki/Tabular_Islamic_calendar
     */
    return [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, isLeap ? 30 : 29];
  },
  isLeap(year) {
    return [2, 5, 7, 10, 13, 15, 18, 21, 24, 26, 29].includes(year % 30);
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
    /**
     * https://journals.ut.ac.ir/article_11492_b7ee99a28a785c87ca1f26a4449f4226.pdf
     * page 34
     */
    return ((11 / 30) * (year - 1) + 0.5) | 0;
  },
  guessYear(days, currentYear) {
    let year = ~~((days - 0.5) / 354.366);

    return year + (currentYear > 0 ? 1 : -1);
  },
};

module.exports = arabic;
