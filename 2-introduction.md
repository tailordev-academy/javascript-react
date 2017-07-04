# Introduction

----

## What is React?

- JavaScript library for building User Interfaces (UIs)
- Facebook Open Source
- **Learn Once, Write Anywhere**

<br>
Documentation: https://facebook.github.io/react/

----

## What is Flux?

- Application architecture (pattern) for building client-side web applications
- Facebook Open Source
- **Unidirectional data flow**

<br>
Documentation: https://facebook.github.io/flux/

----

## What is Flux?

[Redux](http://redux.js.org/) is *one* implementation of the Flux pattern. It is
now the reference and works well with React.

More about it tomorrow!

----

## Modern JavaScript

----

### ES5

**ES** stands for **ECMAScript** and is the language specification used to
implement JavaScript.

ES5 is supported by all browsers, but lacks very interesting features. It is the
JavaScript language you likely know. `jQuery` used to be a great library back
then.

----

### ES2015 (ES6)

Released around 2009, this is likely the most important update to the JavaScript
language.

Most of the modern browsers (_e.g._ Chrome) support it but to maximize
compatibility, we tend to use a transpiler (_e.g._ [Babel](https://babeljs.io/))
to convert down to ES5.

----

### ES2015 (ES6)
#### Block scoped declarations

ES2015 introduces two keywords to declare variables:

- `const`: can only be assigned once,
- `let`: can be reassigned.

Both `const` and `let` are scoped to a block, not to a function like `var`. Do
not use `var` anymore, tend to use `const` as much as you can.

----

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

----

### ES2015 (ES6)
#### Fat Arrow Functions

``` javascript.player.transpiler
const foo = () => 'bar'

this.items.map(x => this.doSomethingWith(x))
```

----

### ES2015 (ES6)
#### Destructuring

``` javascript.player.transpiler
```

----

### ES2015 (ES6)
#### Imports / Exports

``` javascript.player.transpiler
```

----

### ES2015 (ES6)
#### Default parameters

``` javascript.player.transpiler
```

----

### ES2015 (ES6)
#### Default parameters

``` javascript.player.web
```

----

### ES2015 (ES6)
#### Classes

``` javascript.player.web
```

----

### ES2015 (ES6)
#### Dynamic object keys

``` javascript.player.web
```

----

### ES2015 (ES6)
#### Array spread

``` javascript.player.web
```

----

### ESNext

----

### ESNext
#### Object Spread

``` javascript.player.web
```

----

### ESNext
#### Async / Await

``` javascript.player.web
```