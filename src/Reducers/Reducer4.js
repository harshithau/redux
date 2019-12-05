

import * as ActionTypes from '../Action/type';

const initialState={
    d:1
};
export default (state = initialState, action)=>{
    switch(action.type){
        case ActionTypes.U_D:{
            return {...state,d:state.d+action.value}
        }

        default:
            return state;
    }
}