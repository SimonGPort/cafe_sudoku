const initState = {
    writting: 'answer',
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'CHANGE_WRITTING') {
        return {
            writting: action.writting,
        };
    }
    
    else{return state;}
};

export default rootReducer;