import cyrillicCases from './lib/cyrillicCases';

const periods = {
  minute: ['минуту', 'минуты', 'минут'],
  hour: ['час', 'часа', 'часов'],
  day: ['день', 'дня', 'дней'],
  month: ['месяц', 'месяца', 'месяцев'],
  year: ['год', 'года', 'лет'],
};

export default function (ops) {
  ops = ops || {
    now: 'только что',
    was: '%% назад',
    will: 'через %%',
  };

  return function ru(int, period, isAgo) {
    if (0 === int) {
      return ops.now;
    }

    const pattern = isAgo ? ops.was : ops.will;
    const titles = periods[period];
    const val = cyrillicCases(int, titles);

    return pattern.replace(/%%/, `${int} ${val}`);
  }
}
