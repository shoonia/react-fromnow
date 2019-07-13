import cyrillicCases from './lib/cyrillicCases';

const periods = {
  minute: ['минуту', 'минуты', 'минут'],
  hour: ['час', 'часа', 'часов'],
  day: ['день', 'дня', 'дней'],
  month: ['месяц', 'месяца', 'месяцев'],
  year: ['год', 'года', 'лет'],
};

export default function (options) {
  options = options || {
    now: 'только что',
    was: '%% назад',
    will: 'через %%',
  };

  return function ru(int, period, isPast) {
    if (0 === int) {
      return options.now;
    }

    const pattern = isPast ? options.was : options.will;
    const val = cyrillicCases(int, periods[period]);

    return pattern.replace(/%%/, `${int} ${val}`);
  };
}
