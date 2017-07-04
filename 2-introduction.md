# Introduction

📌 Learning objectives:

- learn some definitions
- understand the (relatively) recent JavaScript syntax


## What is React?

- JavaScript library for building User Interfaces (UIs)
- Facebook Open Source
- **Learn Once, Write Anywhere**

<br>
Documentation: https://facebook.github.io/react/


## What is Flux?

- Application architecture (pattern) for building client-side web applications
- Facebook Open Source
- **Unidirectional data flow**

<br>
Documentation: https://facebook.github.io/flux/


## What is Flux?

[Redux](http://redux.js.org/) is *one* implementation of the Flux pattern. It is
now the reference and works well with React.

More about it tomorrow!


## Modern JavaScript


### ES5

**ES** stands for **ECMAScript** and is the language specification used to
implement JavaScript.

ES5 is supported by all browsers, but lacks very interesting features. It is the
JavaScript language you likely know. `jQuery` used to be a great library back
then.


### ES2015 (ES6)

Released around 2009, this is likely the most important update to the JavaScript
language.

Most of the modern browsers (_e.g._ Chrome) support it but to maximize
compatibility, we tend to use a transpiler (_e.g._ [Babel](https://babeljs.io/))
to convert down to ES5.


### ES2015 (ES6)
#### Block scoped declarations

ES2015 introduces two keywords to declare variables:

- `const`: can only be assigned once,
- `let`: can be reassigned.

Both `const` and `let` are scoped to a block, not to a function like `var`. Do
not use `var` anymore, tend to use `const` as much as you can.


### ES2015 (ES6)
#### Block scoped declarations – Example

``` javascript.player.transpiler
const a = 1;
let str = 'Hello, World';

// will throw a compiler error
// a = 42;

// this is ok
str = 'Nope';

if (true) {
    const a = 123;
}
```


### ES2015 (ES6)
#### Arrow functions

``` javascript.player.transpiler
const foo = () => 'bar'

this.items.map(x => this.doSomethingWith(x))

const odds = evens.map(v => v + 1);
const pairs = evens.map(
  v => ({ even: v, odd: v + 1 })
);

const bar = () => {
  // do something ...
  return 'val';
};
```

[MDN Arrow
functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)


### ES2015 (ES6)
#### Destructuring

``` javascript.player.transpiler
// arrays
const values = ['one', 'two', 'three', 'four'];
const [one, two, ...others] = values;

// objects
const props = { a: 'x', b: 'y', c: 'z' };
const { a, c } = props;

// in functions
function foo({ x }) {
  console.log(x);
}
```

[MDN Destructuring
assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)


### ES2015 (ES6)
#### Imports / Exports

- One default export per file
- Every other import and export must be named


### ES2015 (ES6)
#### Imports / Exports – Example

``` javascript.player.transpiler
// import the default export
import React from 'react';

// import other named exports
import { Component, Children } from 'react';

// import default and others simultaneously
// import React, { Component, Children } from 'react';
```


### ES2015 (ES6)
#### Imports / Exports – Example

``` javascript.player.transpiler
const React = () => {};

// default export
export default React;

// named export
export const Component = () => {};
export const PI = 3.14;
```


### ES2015 (ES6)
#### Template literals (strings)

``` javascript.player.transpiler
// multiline strings
const multiline = `string text line 1
string text line 2`;

// interpolation <3
const val = 12;
const message = `Cost: ${val} euros`;

const alt = `this is ${val || 'undefined'}`;
```

[MDN Template
literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)


### ES2015 (ES6)
#### Default parameters

``` javascript.player.console
const sayHello = (name = 'World') => {
  console.log(`Hello, ${name}!`);
};

sayHello();
sayHello('Jean');

// default value is used iif name is `undefined`
sayHello(null);
```


### ES2015 (ES6)
#### Classes

``` javascript.player.web
```


### ES2015 (ES6)
#### Dynamic object keys

``` javascript.player.web
```


### ES2015 (ES6)
#### Array spread

``` javascript.player.web
```


### ESNext


### ESNext
#### Object Spread

``` javascript.player.web
```


### ESNext
#### Async / Await

``` javascript.player.web
```
