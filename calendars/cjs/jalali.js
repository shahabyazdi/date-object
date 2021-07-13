const jalali = {
  name: "jalali",
  startYear: 1,
  yearLength: 365,
  epoch: 1948319,
  century: 14,
  weekStartDayIndex: 0,
  getMonthLengths(isLeap) {
    return [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, isLeap ? 30 : 29];
  },
  isLeap(year) {
    return ((year + 12) % 33) % 4 === 1;
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
  getDayOfYear({ month: { index }, day }) {
    return (index <= 6 ? index * 31 : 6 * 31 + (index - 6) * 30) + day;
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
    return (((474 + mod(year - 474, 2820)) * 682 - 110) / 2816) | 0;
  },
  guessYear(days, currentYear) {
    let year = ~~((days + 0.5) / 365.241);

    return year + (currentYear > 0 ? 1 : -1);
  },
};

module.exports = jalali;

function mod(a, b) {
  return a - b * ((a / b) | 0);
}
