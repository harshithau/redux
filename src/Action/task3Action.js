import * as ActionTypes from './type';

export function Update_A(c){
  return function (dispatch){
  dispatch({
  type:'U_A',value:c
    });
  }
}

export function Update_B(d){
  return function (dispatch){
  dispatch({
  type:'U_B',value:d
    });
  }
}
export function Update_C(a){
  return function (dispatch){
  dispatch({
  type:'U_C',value:a
    });
  }
}
export function Update_D(b){
  return function (dispatch){
  dispatch({
  type:'U_D',value:b
    });
  }
}

