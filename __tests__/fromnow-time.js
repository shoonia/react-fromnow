import { equal } from 'assert';
import React from 'react';

import { render, toISO } from '../util/helpers';
import { NOW, HOUR } from '../util/date';
import Fromnow from '../index';

test('just now', () => {
  const { type, props, children } = render(<Fromnow date={NOW} />);

  equal(type, 'time');
  equal(props.dateTime, toISO(NOW));
  equal(children[0], 'just now');
});

test('1 hour ago', () => {
  const date = NOW - HOUR;
  const { type, props, children } = render(<Fromnow date={date} />);

  equal(type, 'time');
  equal(props.dateTime, toISO(date));
  equal(children[0], '1 hour ago');
});

test('1 hour from now', () => {
  const date = NOW + HOUR;
  const { type, props, children } = render(<Fromnow date={date} />);

  equal(type, 'time');
  equal(props.dateTime, toISO(date));
  equal(children[0], '1 hour from now');
});

test('2 hours ago', () => {
  const date = NOW - HOUR * 2;
  const { type, props, children } = render(<Fromnow date={date} />);

  equal(type, 'time');
  equal(props.dateTime, toISO(date));
  equal(children[0], '2 hours ago');
});

test('2 hours from now', () => {
  const date = NOW + HOUR * 2;
  const { type, props, children } = render(<Fromnow date={date} />);

  equal(type, 'time');
  equal(props.dateTime, toISO(date));
  equal(children[0], '2 hours from now');
});

test('invalid date', () => {
  const { type, props, children } = render(<Fromnow date={'time'} />);

  equal(type, 'time');
  equal(props.dateTime, undefined);
  equal(children, undefined);
});
