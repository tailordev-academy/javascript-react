# The sky is the limit!

📌 Learning objectives:

- learn to improve your codebase
- hear about advanced concepts


## Flow types


## Performance optimization


## More on testing


### `redux-thunk` & `fetch`

In order to test `redux-thunk` and API calls with `fetch` (without having to
actually call the API), we need:

- A [mock store](http://arnaudbenard.com/redux-mock-store/) for your testing
  your redux async action creators and middleware
- A way to [mock HTTP requests](http://www.wheresrhys.co.uk/fetch-mock/) made
  using `fetch`

<br>

``` bash
$ yarn add --dev redux-mock-store fetch-mock
```


#### `redux-mock-store`

``` js
import configureStore from 'redux-mock-store';

const addTodo = () => ({ type: 'ADD_TODO' });

it('should dispatch action', () => {
  const mockStore = configureStore([/* middleware */]);
  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(addTodo());

  expect(store.getActions()).toEqual([
    { type: 'ADD_TODO' },
  ]);
});
```


#### `fetch-mock`

``` js
describe('reducer', () => {
  beforeEach(() => { fetchMock.reset(); });
  afterEach(() => { fetchMock.restore(); });

  it('fetches a sequence on the API', () => {
    // create store with `redux-mock-store`
    // create `expectedActions` variable

    fetchMock.get('*', { id: 'SEQ_ID', ... });

    // `fetchSequence()` must return a Promise
    return store.dispatch(fetchSequence('SEQ_ID'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
```


### Hidden Jest features

```js
// Adding `.only` to `describe`, `it`, or `test` will only run
// this test.
it.only('tests something', () => {
  expect(returnTrue()).toEqual(true);
});
```

```js
// Adding `.skip` to `describe`, `it`, or `test` will skip
// this test.
it.skip('tests something', () => {
  expect(returnTrue()).toEqual(true);
});
```


## Server-Side Rendering (SSR)

Handle the initial render when a user first requests our app. When the
server receives the request, it renders the required component(s) into an HTML
string, and then sends it as a response to the client.

From that point on, the client takes over rendering duties (until page refresh).


### Problem #1

You have to use `node` on the server, which does not understand ES2015.
[Babel](https://babeljs.io/) to the rescue!

``` bash
$ yarn add  babel-cli \
            babel-plugin-transform-require-ignore \
            babel-preset-es2015 \
            babel-preset-react-app
```

``` json
// .babelrc
{
  "presets": ["es2015", "react-app"],
  "plugins": [
    ["babel-plugin-transform-require-ignore", { "extensions": [".css"] }],
  ]
}
```


### Problem #2

You need server code.

``` bash
$ yarn add express
```

<br>

[Code of the server
(Gist)](https://gist.github.com/ecd1a1d77362718dfdc9ec71a2cc081c)


### Problem #3 (1/2)

You have to pass the generated HTML and the state from the server to the client
(`public/index.html`):

``` diff
     <noscript>
       You need to enable JavaScript to run this app.
     </noscript>
-    <div id="root"></div>
+    <div id="root">__SSR__</div>
     <!--
       This HTML file is a template.
       If you open it directly in the browser, you will see an empty page.
       To begin the development, run `npm start` or `yarn start`.
       To create a production bundle, use `npm run build` or `yarn build`.
     -->
+    <script>
+      // WARNING: See the following for security issues around embedding JSON in HTML:
+      // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
+      window.__PRELOADED_STATE__;
+    </script>
   </body>
```


### Problem #3 (2/2)

``` diff
// src/index.js

-const store = configureStore();
+const preloadedState = window.__PRELOADED_STATE__ || {};
+// Allow the passed state to be garbage-collected
+delete window.__PRELOADED_STATE__;
+
+const store = configureStore(preloadedState);
```


### Start the server

``` bash
$ yarn build # this is required
$ BABEL_ENV=production NODE_PATH=src babel-node src/server.js
```

You can disable the server-side rendering with `DISABLE_SSR=true`. The
`BABEL_ENV` is required by the `react-app` preset but does not affect the
application code (because the client code is compiled before).


### This was a Proof of Concept

SSR is easy until you dispatch actions to fetch API resources.  Then, you need
to wait for them and things get complicated. A technique called "double
rendering" allows to handle that, but it requires middleware.

[Redux Saga](https://redux-saga.js.org/), a library that aims to make side
effects in React/Redux applications easier and better, can help.
