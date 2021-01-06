import { createElement } from 'react';

import { calculate } from './lib/calculate';
import { en } from './langs/en';

export const Fromnow = ({ tag, date, lang, ...rest }) => {
  const del = new Date(date);
  const timestamp = del.getTime();

  if (isNaN(timestamp)) {
    return tag ? createElement(tag, rest) : '';
  }

  if (!tag) {
    return calculate(timestamp, lang);
  }

  const attrName = tag === 'time' ? 'dateTime' : 'data-datetime';
  const props = Object.assign({}, rest, {
    [attrName]: del.toISOString(),
  });

  return createElement(tag, props, calculate(timestamp, lang));
};

Fromnow.defaultProps = {
  tag: 'time',
  lang: en(),
};
