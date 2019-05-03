import calculate from './lib/calculate';
import en from './en';

export default function createFromnow(lang, ops) {
  const fn = lang ? lang(ops) : en(ops);

  return function useFromnow(date) {
    const timestamp = new Date(date).getTime();

    if (isNaN(timestamp)) {
      return '';
    }

    return calculate(timestamp, fn);
  }
}
