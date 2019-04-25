const periods = {
  minute: ['минуту', 'минуты', 'минут'],
  hour: ['час', 'часа', 'часов'],
  day: ['день', 'дня', 'дней'],
  month: ['месяц', 'месяца', 'месяцев'],
  year: ['год', 'года', 'лет'],
};

function calcPeriods(int, period) {
  const cases = [2, 0, 1, 1, 1, 2];
  const titles = periods[period];

  return titles[
    (int % 100 > 4 && int % 100 < 20)
      ? 2
      : cases[
      (int % 10 < 5)
        ? int % 10
        : 5
      ]
  ];
}

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
    const val = calcPeriods(int, period);

    return pattern.replace(/%%/, `${int} ${val}`);
  }
}
