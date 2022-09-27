export const changeAnswer=(event,row,col)=>{
    return{
        type:'CHANGE_ANSWER',
        event,
        row,
        col
    };
};