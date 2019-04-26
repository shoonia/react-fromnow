import assert from 'assert';
import React from 'react';
import renderer from 'react-test-renderer';

import Fromnow, { ua } from '../index';

const NOW = 1556026229910;

Date.now = jest.fn(() => NOW);

const equal = assert.equal;
const render = Element => renderer.create(Element).toJSON();
const toISO = date => new Date(date).toISOString();

test('tag', () => {
  const { type, props } = render(<Fromnow date={NOW} tag="span" />);

  equal(type, 'span');
  equal(props['data-datetime'], toISO(NOW));
});

test('no tag', () => {
  const str = render(<Fromnow date={NOW} tag={null} />);

  equal(str, 'just now');
  equal(typeof str, 'string');
});

test('className', () => {
  const { props } = render(<Fromnow date={NOW} className="from__now" />);

  equal(props.className, 'from__now');
});

test('Invalid date and className', () => {
  const { props, children } = render(<Fromnow date={'0_0'} className="from__now" />);

  equal(props.className, 'from__now');
  equal(props.dateTime, undefined);
  equal(children, undefined);
});

test('Invalid date and no tag', () => {
  const empty = render(<Fromnow date={'0_0'} tag="" />);

  equal(empty, '');
});

test('Set lang', () => {
  const lang = ua();
  const { children } = render(<Fromnow date={NOW} lang={lang} />);

  equal(children[0], 'зараз');
});
