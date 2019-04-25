export default function (ops) {
  ops = ops || {
    now: 'just now',
    was: '%% ago',
    will: '%% from now',
  };

  return function en(int, period, isAgo) {
    if (0 === int) {
      return ops.now;
    }

    const pattern = isAgo ? ops.was : ops.will;
    const val = (2 > int) ? period : period + 's';

    return pattern.replace(/%%/, `${int} ${val}`);
  }
}
