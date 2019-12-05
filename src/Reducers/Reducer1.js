

import * as ActionTypes from '../Action/type';

const initialState={
    a:1
};
export default (state = initialState, action)=>{
    switch(action.type){
        case ActionTypes.U_A:{
            return {...state,a:state.a+action.value}
        }

        default:
            return state;
    }
}