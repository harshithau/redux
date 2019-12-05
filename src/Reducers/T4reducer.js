

import * as ActionTypes from '../Action/type';

const initialState={
    b:1
};
export default (state = initialState, action)=>{
    switch(action.type){
        case ActionTypes.U_B:{
            return {...state,b:state.b+action.value}
        }

        default:
            return state;
    }
}