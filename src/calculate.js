const MIN = 60 * 1e3;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const YEAR = DAY * 365;
const MONTH = DAY * 30;

function getPeriods(abs) {
  return {
    year: abs / YEAR,
    month: (abs % YEAR) / MONTH,
    day: (abs % MONTH) / DAY,
    hour: (abs % DAY) / HOUR,
    minute: (abs % HOUR) / MIN,
  };
}

function getInterval(periods) {
  for (const k in periods) {
    const val = periods[k] | 0;

    if (val > 0) {
      const time = (val === 1) ? k : `${k}s`;

      return `${val} ${time}`;
    }
  }

  return '';
}

module.exports = function (timestamp) {
  const del = timestamp - Date.now();
  const abs = Math.abs(del);

  if (abs < MIN) {
    return 'just now';
  }

  const periods = getPeriods(abs);
  const interval = getInterval(periods);

  return interval + ((del < 0) ? ' ago' : ' from now');
}
