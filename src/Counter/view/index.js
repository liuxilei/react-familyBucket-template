import React, { memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { increment, decrement } from "../actions";

const Counter = ({ count, increment, decrement }) => {
    return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispachToProps = (dispatch) => bindActionCreators(({
    increment,
    decrement
}), dispatch);

export default connect(mapStateToProps, mapDispachToProps)(memo(Counter));