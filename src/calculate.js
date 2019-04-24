const MIN = 60 * 1e3;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

function getPeriods(abs) {
  return [
    ['minute', (abs % HOUR) / MIN | 0],
    ['hour', (abs % DAY) / HOUR | 0],
    ['day', (abs % MONTH) / DAY | 0],
    ['month', (abs % YEAR) / MONTH | 0],
    ['year', abs / YEAR | 0],
  ];
}

function getInterval(periods) {
  let i = periods.length;

  while (0 < i--) {
    if (0 < periods[i][1]) {
      return periods[i];
    }
  }
}

function en(val, period, isAgo) {
  if (0 === val) {
    return 'just now';
  }

  const suffix = isAgo
    ? ' ago'
    : ' from now';

  const interval = (1 === val)
    ? period
    : period + 's';

  return `${val} ${interval}${suffix}`;
}

export default function (timestamp, lang = en) {
  const del = timestamp - Date.now();
  const abs = Math.abs(del);

  if (abs < MIN) {
    return lang(0);
  }

  const periods = getPeriods(abs);
  const [period, val] = getInterval(periods);

  return lang(val, period, (0 > del));
}
