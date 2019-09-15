import calculate from './lib/calculate';
import en from './langs/en';

export default function createFromnow(lang, ops) {
  const fn = typeof lang === 'function' ? lang(ops) : en(ops);

  return function fromnow(date) {
    const timestamp = new Date(date).getTime();

    if (isNaN(timestamp)) {
      return '';
    }

    return calculate(timestamp, fn);
  };
}
