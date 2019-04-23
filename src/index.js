import React from 'react';

import calculate from './calculate';

function Fromnow({ tag, date, ...rest }) {
  const del = new Date(date);
  const timestamp = del.getTime();

  if (isNaN(timestamp)) {
    return tag ? React.createElement(tag, rest) : '';
  }

  if (!tag) {
    return calculate(timestamp);
  }

  const attrName = tag === 'time' ? 'dateTime' : 'data-datetime';
  const props = {
    ...rest,
    [attrName]: del.toISOString(),
  };

  return React.createElement(tag, props, calculate(timestamp));
}

Fromnow.defaultProps = {
  tag: 'time'
};

export default Fromnow;
