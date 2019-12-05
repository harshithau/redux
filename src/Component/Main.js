import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Update_A,Update_B} from '../Action/task2Action';
class Main extends Component {
    render() {
    return (
    <div>
        <span>Value A:{this.props.a}</span>
        <span>Value B:{this.props.b}</span>
        <button onClick={()=>this.props.Update_A(this.props.b)}>Upadte A</button>
        <button onClick={()=>this.props.Update_B(this.props.a)}>Upadet B</button>
    </div>
            );
        }
    }
    const mapStoreToProps=(state)=>
    {
        const {a} = state.Reducer1;
        const {b} = state.Reducer2;
        return {a,b};
}

export default connect(mapStoreToProps,{Update_A,Update_B})(Main);