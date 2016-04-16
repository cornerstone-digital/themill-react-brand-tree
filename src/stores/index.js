import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(createLogger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(reducers, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
