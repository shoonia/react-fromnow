import cyrillicCases from './lib/cyrillicCases';

const periods = {
  minute: ['хвилину', 'хвилини', 'хвилин'],
  hour: ['годину', 'години', 'годин'],
  day: ['день', 'дні', 'днів'],
  month: ['місяць', 'місяці', 'місяців'],
  year: ['рік', 'роки', 'років'],
};

export default function (ops) {
  ops = ops || {
    now: 'зараз',
    was: '%% тому назад',
    will: 'через %%',
  };

  return function ua(int, period, isAgo) {
    if (0 === int) {
      return ops.now;
    }

    const pattern = isAgo ? ops.was : ops.will;
    const titles = periods[period];
    const val = cyrillicCases(int, titles);

    return pattern.replace(/%%/, `${int} ${val}`);
  }
}
