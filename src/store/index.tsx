import { createStore, compose, applyMiddleware } from 'redux'
import { RootState, rootReducer } from './reducers'

export default function configureStore() {
    const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware())
    );

    return store;
}