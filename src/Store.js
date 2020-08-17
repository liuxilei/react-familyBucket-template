import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { reducer as Counter, sagas as counterSaga } from "@/Counter";

const reducer = combineReducers({
	Counter,
});

const win = window;
let middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
middlewares.push(logger);

const storeEnhancers = compose(
	applyMiddleware(...middlewares),
	win && win.devToolsExtension ? win.devToolsExtension() : (f) => f,
);

const store = createStore(reducer, {}, storeEnhancers);
sagaMiddleware.run(counterSaga);

export default store;
