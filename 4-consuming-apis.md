# Consuming APIs

📌 Learning objectives:

- learn how to talk to an API
- get familiar with more libraries
- learn the basics of client-side routing


## Fetch and HTTP

The Fetch API provides an interface for fetching resources (including across the
network). R.I.P. `XMLHttpRequest`!

<br>

Documentation: [MDN Fetch
API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)


### Usage

``` js
fetch('https://example.org/api/endpoint')
  .then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    throw new Error(response.statusText);
  })
  .then((json) => {
    // do something with the `json` data
  });
```


### Polyfills

We have to rely on a polyfill to use the `fetch` API:

- [`whatwg-fetch`](https://github.com/github/fetch)
- [`isomorphic-fetch`](https://github.com/matthew-andrews/isomorphic-fetch)

<br>

``` bash
$ yarn add isomorphic-fetch
```


## Redux middleware

The best feature of middleware is that it is composable in a chain. Redux
middleware provides (third-party) extension points between dispatching actions
and the moment reducers are reached.

<br>

Documentation: [Redux
Middleware](http://redux.js.org/docs/advanced/Middleware.html)


### Redux Thunk

[Redux Thunk](https://github.com/gaearon/redux-thunk) middleware allows you to
write action creators that return a function instead of an action. It is useful
to create asynchronous actions (API calls).

``` bash
$ yarn add redux-thunk
```

⚠️ Do not forget to configure it!


#### Example of a thunk

``` js
export const callAPI = id => {
  return dispatch => {
    dispatch({ type: CALL_API_STARTED });

    return fetch(`https://example.org/api/endpoint/${id}`)
      .then((response) => {
        // TODO: throw Error when response is not successful
        return response.json();
      })
      // only executed when request is OK
      .then(json => dispatch(loadResults(json)))
      // request has failed
      .catch(error => dispatch(displayError(error)))
      // always executed
      .then(() => dispatch({ type: CALL_API_FINISHED }))
    ;
  };
};
```


### Redux Persist

[Redux Persist](https://github.com/rt2zz/redux-persist) allows to automatically
persist and rehydrate a Redux store (in `localStorage` for example).

``` bash
$ yarn add redux-persist@4
```


#### Usage (with devtools extension)

``` js
const isNotProduction = process.env.NODE_ENV !== 'production';
// The code below is new.
const enableDevTools =
  isNotProduction &&
  'undefined' !== typeof window &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
```

``` js
if (isNotProduction) {
  // ...
}

// The code below is new.
const composeEnhancers = enableDevTools
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose; // import `compose` from `redux`
```


#### Usage (with devtools extension)

``` js
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    composeEnhancers(autoRehydrate())
  );

  persistStore(store);

  return store;
}
```


### Middleware vs Enhancers

Redux Persist is not a middleware _per se_ but an _enhancer_. It adds extra
functionality to the store when you call `createStore()`.

Middleware enhances the store at the `dispatch()` level.


<!-- .slide: class="hands-on" -->
## 🚀 Hands-on


<!-- .slide: class="hands-on" -->
### The Plot

Ensembl is a project to automate the annotation of the human genome. They expose
a [REST(-ish) API](http://rest.ensembl.org/). Given a "Ensembl stable ID", it is
possible to retrieve a sequence.

You can find Ensembl identifiers [on this
page](http://www.ensembl.org/Multi/Search/Results?site=ensembl;page=1;facet_feature_type=Gene;q=human)
(`ENSG...`).

<br>

``` bash
$ http --json http://rest.ensembl.org/sequence/id/ENSG00000274347
```

(Install [HTTPie](https://github.com/jakubroztocil/httpie) if you do not use it
yet)


<!-- .slide: class="hands-on" -->
### Exercise 4.1

1. Install `redux-thunk` and `isomorphic-fetch`


<!-- .slide: class="hands-on" -->
### Exercise 4.2

1. Create a `EnsemblSearch` component that renders a `form` with a search bar
   (`input`) and a `button` to trigger the search
2. Create a `ensembl` reducer that fetches a sequence from the Ensembl API given
   an identifier. Error handling is at the very least a `alert()` call
3. The `button` should be disabled when input is empty and should be replaced by
   a _loading_ message when API is called


### Checkpoint #7

![Checkpoint #7](images/seqbook-checkpoint-7.gif)


<!-- .slide: class="hands-on" -->
### Exercise 4.3

1. Add `redux-persist` to your project


## Routing

On the server, routing refers to determining how an application responds to a
particular client request.

On the client, it is similar: deciding which "view" to display according to the
URL browsed by the user.


### React Router

[React Router](https://reacttraining.com/react-router/) is a third-party library
allowing to deal with different "pages" in your application, in a very React
way.

``` bash
yarn add react-router-dom
```

<br>

Documentation: [React Router
(web)](https://reacttraining.com/react-router/web/guides/philosophy)


#### Example

``` js
ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      {/* ... */}

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);
```


#### 404 - Not Found

A `<Switch>` component renders the first child `<Route>` that matches. A
`<Route>` with no path always matches.

``` js
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
```


<!-- .slide: class="hands-on" -->
## 🚀 Hands-on


<!-- .slide: class="hands-on" -->
### Exercise 4.4

1. Create a new `About` component with some content
2. Add `react-router-dom` and configure the routing into your application (you
   will have to update the `Header` component too)
3. Add a `NotFound` component to catch `404` errors


<!-- .slide: class="hands-on" -->
### Exercise 4.5

1. Rename the `App` component to `Home`
2. Move your routing code (inside `Router`) into a `src/Seqbook.js` file
