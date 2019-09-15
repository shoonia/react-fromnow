const MIN = 60 * 1e3;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

function getPeriods(abs) {
  return [
    [(abs % HOUR) / MIN | 0, 'minute'],
    [(abs % DAY) / HOUR | 0, 'hour'],
    [(abs % MONTH) / DAY | 0, 'day'],
    [(abs % YEAR) / MONTH | 0, 'month'],
    [(abs / YEAR) | 0, 'year'],
  ];
}

function getInterval(periods) {
  let i = periods.length;

  while (0 < i--) {
    if (0 < periods[i][0]) {
      return periods[i];
    }
  }
}

export default function (timestamp, lang) {
  const del = timestamp - Date.now();
  const abs = Math.abs(del);

  if (abs < MIN) {
    return lang(0);
  }

  const periods = getPeriods(abs);
  const [int, period] = getInterval(periods);

  return lang(int, period, (0 > del));
}
