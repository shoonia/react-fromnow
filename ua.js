import cyrillicCases from './lib/cyrillicCases';

const periods = {
  minute: ['хвилину', 'хвилини', 'хвилин'],
  hour: ['годину', 'години', 'годин'],
  day: ['день', 'дні', 'днів'],
  month: ['місяць', 'місяці', 'місяців'],
  year: ['рік', 'роки', 'років'],
};

export default function (options) {
  options = options || {
    now: 'зараз',
    was: '%% тому назад',
    will: 'через %%',
  };

  return function ua(int, period, isPast) {
    if (0 === int) {
      return options.now;
    }

    const pattern = isPast ? options.was : options.will;
    const val = cyrillicCases(int, periods[period]);

    return pattern.replace(/%%/, `${int} ${val}`);
  }
}
