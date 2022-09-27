export const changeDraft=(event,row,col,index)=>{
    return{
        type:'CHANGE_DRAFT',
        event,
        row,
        col,
        index
    };
};