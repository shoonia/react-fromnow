import React from 'react';

import calculate from './calculate';

function Fromnow({ tag, date, ...rest }) {
  const del = new Date(date);
  const timestamp = del.getTime();

  if (isNaN(timestamp)) {
    return React.createElement(tag);
  }

  const time = calculate(timestamp);
  const dateTime = del.toISOString();

  return React.createElement(tag, { ...rest, dateTime }, time);
}

Fromnow.defaultProps = {
  tag: 'time'
};

export default Fromnow;
