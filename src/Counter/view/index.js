import React, { memo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, asyncIncrement } from "../actions";

const Counter = ({ count, increment, decrement, asyncIncrement }) => {
	return (
		<div>
			<h2>计数器</h2>
			<div>当前得分：{count}</div>
			<div>
				<button onClick={decrement}>-</button>
				&nbsp;
				<button onClick={increment}>+</button>
				&nbsp;
				<button onClick={asyncIncrement}>异步增加</button>
			</div>
		</div>
	);
};

const mapStateToProps = ({ Counter }) => ({
	...Counter,
});

const mapDispachToProps = (dispatch) =>
	bindActionCreators(
		{
			increment,
			decrement,
			asyncIncrement,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispachToProps)(memo(Counter));
