import * as ActionTypes from './type';

export function Update_A(b){
  return function (dispatch){
  dispatch({
  type:'U_A',value:b
    });
  }
}

export function Update_B(a){
  return function (dispatch){
  dispatch({
  type:'U_B',value:a
    });
  }
}