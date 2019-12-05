const initialState = {
    age:20,
 
    };
   
    
    const reducer = (state=initialState, action) => {
    const newState = {...state};
    if(action.type === 'AGE_UP'){
    newState.age=newState.age+action.value;
    if(newState.age==31){
      newState.age=30;
    }
   
}
    if(action.type === 'AGE_DOWN'){
    newState.age=newState.age-action.value;
    if(newState.age <16){
        newState.age=15;
    }
    
    }
    return newState;
    };
    
    export default reducer;