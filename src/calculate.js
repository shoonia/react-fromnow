const MIN = 60 * 1e3;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

function getPeriods(abs) {
  return [
    ['minute', (abs % HOUR) / MIN],
    ['hour', (abs % DAY) / HOUR],
    ['day', (abs % MONTH) / DAY],
    ['month', (abs % YEAR) / MONTH],
    ['year', abs / YEAR],
  ];
}

function getInterval(periods) {
  let i = periods.length;

  while (0 < i--) {
    const val = ~~periods[i][1]; // it's the same as Math.floor(); but it faster

    if (0 < val) {
      const period = periods[i][0];

      return (val + ' ' + ((1 === val) ? period : (period + 's')));
    }
  }

  return '';
}

export default function (timestamp) {
  const del = timestamp - Date.now();
  const abs = Math.abs(del);

  if (abs < MIN) {
    return 'just now';
  }

  const periods = getPeriods(abs);
  const interval = getInterval(periods);

  return interval + ((0 > del) ? ' ago' : ' from now');
}
