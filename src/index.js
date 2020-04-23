import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { view as Counter, reducer } from "./Counter";
import { createStore } from 'redux';
const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("app"));