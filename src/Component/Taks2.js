import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Update_A,Update_B,Update_C,Update_D} from '../Action/task3Action';
import './Task3.css';
class Task2 extends Component {
    render() {
    return (
        <div>
        <div class="h1"><center>
            UPDATE
            </center></div>
    <div className="grid">
        
        <span>{this.props.a}</span>
        <span>{this.props.b}</span>
        <span>{this.props.c}</span>
        <span>{this.props.d}</span>
        <button onClick={()=>this.props.Update_A(this.props.c)}>Upadte A</button>
       
         <button onClick={()=>this.props.Update_B(this.props.d)}>Upadet B</button>
        
        <button onClick={()=>this.props.Update_C(this.props.a)}>Upadte C</button>
     
         <button onClick={()=>this.props.Update_D(this.props.b)}>Update D</button>
    </div>
    </div>
            );
        }
    }
    
    const mapStoreToProps=(state)=>
    {
        const {a} = state.T3reducer;
        const {b} = state.T4reducer;
        const {c} = state.Reducer3;
        const {d} = state.Reducer4;

        return {a,b,c,d};
}

export default connect(mapStoreToProps,{Update_A,Update_B,Update_C,Update_D})(Task2);