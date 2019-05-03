# Create language modifier

Example: Create short forms date for English

**shortEng.js**

```js
// Short forms:
const periods = {
  minute: "min",
  hour: "hr",
  day: "d",
  month: "mon",
  year: "yr"
};

/**
 * @param {Object[]} options
 * @param {string} options[].now - if it's less one minute (+/-)
 * @param {string} options[].was - if it's past
 * @param {string} options[].will - // if it's future
 *
 * @return {function}
 */
function shortEng(options) {
  // default options:
  // Use `%%` as key for insert date.
  options = options || {
    now: "just now",
    was: "%% ago",
    will: "%% from now"
  };

  /**
   * @param {number} int - positive integer
   * @param {string[]} [period=minute|hour|day|month|year] - time period
   * @param {boolean} isPast - past or future
   *
   * @return {String}
   */
  return function(int, period, isPast) {
    // `int` always positive integer
    // if it's `0`, it's +/- one minute
    if (0 === int) {
      return options.now;
    }

    // past or future
    const pattern = isPast ? options.was : options.will;
    // Setting periods and add suffix if it needs
    const val = periods[period] + (1 < int ? "s" : "");

    // insert date
    return pattern.replace(/%%/, `${int}${val}`);
  };
}

export default shortEng;
```

**index.js**

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Fromnow from 'react-fromnow';

import shortEng from './shortEng';

const lang = shortEng();
const date = Date.now() - (1e3 * 60 * 60 * 2);

ReactDOM.render(
  <Fromnow date={date} lang={lang} />,
  document.getElementById('root')
);
```

Result:

```html
<time dateTime="2019-04-23T12:30:29.910Z">
  2hrs ago
</time>
```

[DEMO](https://codesandbox.io/s/wy2rxzw4w)
