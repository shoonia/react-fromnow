import React from 'react';

import calculate from './lib/calculate';
import en from './langs/en';

function Fromnow({ tag, date, lang, ...rest }) {
  const del = new Date(date);
  const timestamp = del.getTime();

  if (isNaN(timestamp)) {
    return tag ? React.createElement(tag, rest) : '';
  }

  if (!tag) {
    return calculate(timestamp, lang);
  }

  const attrName = tag === 'time' ? 'dateTime' : 'data-datetime';
  const props = {
    ...rest,
    [attrName]: del.toISOString(),
  };

  return React.createElement(tag, props, calculate(timestamp, lang));
}

Fromnow.defaultProps = {
  tag: 'time',
  lang: en(),
};

export default Fromnow;
