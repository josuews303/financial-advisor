import { createStore } from "redux";
import allReducers from './reducers/index';

export default function createStorage() {
    const store = createStore(allReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
      return store;
}

  