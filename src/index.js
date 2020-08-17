import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { view as Counter } from "@/Counter";
import store from "@/Store";

const App = () => (
	<Provider store={store}>
		<Counter />
	</Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
