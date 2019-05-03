export default function (options) {
  options = options || {
    now: 'just now',
    was: '%% ago',
    will: '%% from now',
  };

  return function en(int, period, isPast) {
    if (0 === int) {
      return options.now;
    }

    const pattern = isPast ? options.was : options.will;
    const val = (2 > int) ? period : period + 's';

    return pattern.replace(/%%/, `${int} ${val}`);
  }
}
