# react-fromnow

React component for display time from now

[Language support](#language-support): English, Українська, Русский

## Installing

```bash
npm install react-fromnow
# or
yarn add react-fromnow
```

## Basic usage

Below examples assumes `Date.now()` is `1556026229910`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Fromnow from 'react-fromnow';

ReactDOM.render(
  <Fromnow date={Date.now()} />,
  document.getElementById('root')
);
```
```html
<time dateTime="2019-04-23T13:30:29.910Z">
  just now
</time>
```

## Set tag

Default use HTML tag `<time>` [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)

```js
<Fromnow tag="span" date={Date.now() - (1e3 * 60 * 60)} />
```
```html
<span data-datetime="2019-04-23T12:30:29.910Z">
  1 hour ago
</span>
```

## No tag

Set any false expression `"" | false | null | undefined ` and component return just string.

```js
<Fromnow tag="" date={Date.now() + (1e3 * 60 * 60)} />
```
```html
"1 hour from now"
```

## Set attributes

```js
<Fromnow className="from__now" date={Date.now() - (1e3 * 60 * 60 * 2)} />
```
```html
<time class="from__now" dateTime="2019-04-23T11:30:29.910Z">
  2 hours ago
</time>
```

## Language support

| Language              | `import`                     |
| --------------------- | ---------------------------- |
| English               | "react-fromnow/en" (default) |
| Russian (Русский)     | "react-fromnow/ru"           |
| Ukrainian (Українська)| "react-fromnow/ua"           |


```js
import React from 'react';
import ReactDOM from 'react-dom';

import Fromnow, { ua } from 'react-fromnow';

const lang = ua();
const date = Date.now() - (1e3 * 60 * 60 * 2);

ReactDOM.render(
  <Fromnow date={date} lang={lang} />,
  document.getElementById('root')
);
```

```html
<time dateTime="2019-04-23T11:30:29.910Z">
  2 години тому назад
</time>
```

## Language configuration

Use the `%%` key for insert date.

```js
import Fromnow, { en } from 'react-fromnow/en';

const lang = en({
  now: 'just now',
  was: '%% AGO!!!', // changed
  will: '%% from now',
});

const date = Date.now() - (1e3 * 60 * 60 * 5);

<Fromnow date={date} lang={lang} />
```
```html
<time dateTime="2019-04-23T08:30:29.910Z">
  5 hours AGO!!!
</time>
```

**default**

| Language               | now          | was             | will          |
| ---------------------- | ------------ | --------------- | --------------|
| English                | "just now"   | "%% ago"        | "%% from now" |
| Russian (Русский)      | "только что" | "%% назад"      | "через %%"    |
| Ukrainian (Українська) | "зараз"      | "%% тому назад" | "через %%"    |

## Use `fromnow()`

```js
import { createFromnow } from 'react-fromnow';

// initialized
const useFromnow = createFromnow();

// english default
useFromnow(Date.now() - (1e3 * 60 * 60 * 4)); // "4 hours ago"
```

**language**

```js
import { createFromnow, ru } from 'react-fromnow';

// initialized
const useFromnow = createFromnow(ru);

useFromnow(Date.now() + (1e3 * 60 * 4)); // "через 4 минуты"
```

**with options**
```js
import { createFromnow, ua } from 'react-fromnow';

// initialized
const useFromnow = createFromnow(ua, {
  now: 'саме зараз', // changed
  was: '%% тому назад',
  will: 'через %%',
});

useFromnow(Date.now()); // "саме зараз"
```

## License

[MIT](./LICENSE)
