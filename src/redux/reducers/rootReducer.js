const initState = {
    writting: 'answer',
    game: [
        {lock:true, zone:0,row:0,col:0,draft:['','','','','','','','',''],answer:'3'},{lock:false, zone:0,row:0,col:1,draft:['','','','','','','','',''],answer:''},{lock:false, zone:0,row:0,col:2,draft:['','','','','','','','',''],answer:''},{lock:false, zone:1,row:0,col:3,draft:['','','','','','','','',''],answer:''},{lock:false, zone:1,row:0,col:4,draft:['','','','','','','','',''],answer:''},{lock:false, zone:1,row:0,col:5,draft:['','','','','','','','',''],answer:''},{lock:false, zone:2,row:0,col:6,draft:['','','','','','','','',''],answer:''},{lock:false, zone:2,row:0,col:7,draft:['','','','','','','','',''],answer:''},{lock:false, zone:2,row:0,col:8,draft:['','','','','','','','',''],answer:''},
        {lock:false, zone:0,row:1,col:0,draft:['','','','','','','','',''],answer:''},{lock:false, zone:0,row:1,col:1,draft:['','','','','','','','',''],answer:''},{lock:false, zone:0,row:1,col:2,draft:['','','','','','','','',''],answer:''},{lock:false, zone:1,row:1,col:3,draft:['','','','','','','','',''],answer:''},{lock:false, zone:1,row:1,col:4,draft:['','','','','','','','',''],answer:''},{lock:false, zone:1,row:1,col:5,draft:['','','','','','','','',''],answer:''},{lock:false, zone:2,row:1,col:6,draft:['','','','','','','','',''],answer:''},{lock:false, zone:2,row:1,col:7,draft:['','','','','','','','',''],answer:''},{lock:false, zone:2,row:1,col:8,draft:['','','','','','','','',''],answer:''},
        {lock:false, zone:0,row:2,col:0,draft:['','','','','','','','',''],answer:''},{lock:false, zone:0,row:2,col:1,draft:['','','','','','','','',''],answer:''},{lock:false, zone:0,row:2,col:2,draft:['','','','','','','','',''],answer:''},{lock:false, zone:1,row:2,col:3,draft:['','','','','','','','',''],answer:''},{lock:false, zone:1,row:2,col:4,draft:['','','','','','','','',''],answer:''},{lock:false, zone:1,row:2,col:5,draft:['','','','','','','','',''],answer:''},{lock:false, zone:2,row:2,col:6,draft:['','','','','','','','',''],answer:''},{lock:false, zone:2,row:2,col:7,draft:['','','','','','','','',''],answer:''},{lock:false, zone:2,row:2,col:8,draft:['','','','','','','','',''],answer:''},
        {lock:false, zone:3,row:3,col:0,draft:['','','','','','','','',''],answer:''},{lock:false, zone:3,row:3,col:1,draft:['','','','','','','','',''],answer:''},{lock:false, zone:3,row:3,col:2,draft:['','','','','','','','',''],answer:''},{lock:false, zone:4,row:3,col:3,draft:['','','','','','','','',''],answer:''},{lock:false, zone:4,row:3,col:4,draft:['','','','','','','','',''],answer:''},{lock:false, zone:4,row:3,col:5,draft:['','','','','','','','',''],answer:''},{lock:false, zone:5,row:3,col:6,draft:['','','','','','','','',''],answer:''},{lock:false, zone:5,row:3,col:7,draft:['','','','','','','','',''],answer:''},{lock:false, zone:5,row:3,col:8,draft:['','','','','','','','',''],answer:''},
        {lock:false, zone:3,row:4,col:0,draft:['','','','','','','','',''],answer:''},{lock:false, zone:3,row:4,col:1,draft:['','','','','','','','',''],answer:''},{lock:false, zone:3,row:4,col:2,draft:['','','','','','','','',''],answer:''},{lock:false, zone:4,row:4,col:3,draft:['','','','','','','','',''],answer:''},{lock:false, zone:4,row:4,col:4,draft:['','','','','','','','',''],answer:''},{lock:false, zone:4,row:4,col:5,draft:['','','','','','','','',''],answer:''},{lock:false, zone:5,row:4,col:6,draft:['','','','','','','','',''],answer:''},{lock:false, zone:5,row:4,col:7,draft:['','','','','','','','',''],answer:''},{lock:false, zone:5,row:4,col:8,draft:['','','','','','','','',''],answer:''},
        {lock:false, zone:3,row:5,col:0,draft:['','','','','','','','',''],answer:''},{lock:false, zone:3,row:5,col:1,draft:['','','','','','','','',''],answer:''},{lock:false, zone:3,row:5,col:2,draft:['','','','','','','','',''],answer:''},{lock:false, zone:4,row:5,col:3,draft:['','','','','','','','',''],answer:''},{lock:false, zone:4,row:5,col:4,draft:['','','','','','','','',''],answer:''},{lock:false, zone:4,row:5,col:5,draft:['','','','','','','','',''],answer:''},{lock:false, zone:5,row:5,col:6,draft:['','','','','','','','',''],answer:''},{lock:false, zone:5,row:5,col:7,draft:['','','','','','','','',''],answer:''},{lock:false, zone:5,row:5,col:8,draft:['','','','','','','','',''],answer:''},
        {lock:false, zone:6,row:6,col:0,draft:['','','','','','','','',''],answer:''},{lock:false, zone:6,row:6,col:1,draft:['','','','','','','','',''],answer:''},{lock:false, zone:6,row:6,col:2,draft:['','','','','','','','',''],answer:''},{lock:false, zone:7,row:6,col:3,draft:['','','','','','','','',''],answer:''},{lock:false, zone:7,row:6,col:4,draft:['','','','','','','','',''],answer:''},{lock:false, zone:7,row:6,col:5,draft:['','','','','','','','',''],answer:''},{lock:false, zone:8,row:6,col:6,draft:['','','','','','','','',''],answer:''},{lock:false, zone:8,row:6,col:7,draft:['','','','','','','','',''],answer:''},{lock:false, zone:8,row:6,col:8,draft:['','','','','','','','',''],answer:''},
        {lock:false, zone:6,row:7,col:0,draft:['','','','','','','','',''],answer:''},{lock:false, zone:6,row:7,col:1,draft:['','','','','','','','',''],answer:''},{lock:false, zone:6,row:7,col:2,draft:['','','','','','','','',''],answer:''},{lock:false, zone:7,row:7,col:3,draft:['','','','','','','','',''],answer:''},{lock:false, zone:7,row:7,col:4,draft:['','','','','','','','',''],answer:''},{lock:false, zone:7,row:7,col:5,draft:['','','','','','','','',''],answer:''},{lock:false, zone:8,row:7,col:6,draft:['','','','','','','','',''],answer:''},{lock:false, zone:8,row:7,col:7,draft:['','','','','','','','',''],answer:''},{lock:false, zone:8,row:7,col:8,draft:['','','','','','','','',''],answer:''},
        {lock:false, zone:6,row:8,col:0,draft:['','','','','','','','',''],answer:''},{lock:false, zone:6,row:8,col:1,draft:['','','','','','','','',''],answer:''},{lock:false, zone:6,row:8,col:2,draft:['','','','','','','','',''],answer:''},{lock:false, zone:7,row:8,col:3,draft:['','','','','','','','',''],answer:''},{lock:false, zone:7,row:8,col:4,draft:['','','','','','','','',''],answer:''},{lock:false, zone:7,row:8,col:5,draft:['','','','','','','','',''],answer:''},{lock:false, zone:8,row:8,col:6,draft:['','','','','','','','',''],answer:''},{lock:false, zone:8,row:8,col:7,draft:['','','','','','','','',''],answer:''},{lock:false, zone:8,row:8,col:8,draft:['','','','','','','','',''],answer:''},
    ]
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'CHANGE_DRAFT') {
        const indexSquare=state.game.findIndex((square)=>{return square.row===action.row && square.col===action.col;});
        const gameTemp=[...state.game];
        gameTemp[indexSquare]['draft'][action.index]=action.event;
        return {
            ...state,
            game: gameTemp,
        };
    }
    if (action.type === 'CHANGE_ANSWER') {
        const indexSquare=state.game.findIndex((square)=>{return square.row===action.row && square.col===action.col;});
        
        const sameRow=[...state.game].filter((square)=>{return square.row===action.row;}).map((square)=>{return square.answer;});
        const sameCol=[...state.game].filter((square)=>{return square.col===action.col;}).map((square)=>{return square.answer;});
        const sameZone=[...state.game].filter((square)=>{return square.zone===state.game[indexSquare]['zone'];}).map((square)=>{return square.answer;});
        const numberRepeated=sameRow.includes(action.event) || sameCol.includes(action.event) || sameZone.includes(action.event);
        if(action.event!=='' && numberRepeated){return {...state};}
        
        const gameTemp=[...state.game];
        gameTemp[indexSquare]['answer']=action.event;
        gameTemp[indexSquare]['draft']=['','','','','','','','',''];

        return {
            ...state,
            game: gameTemp,
        };
    }
    if (action.type === 'CHANGE_WRITTING') {
        return {
            ...state,
            writting: action.writting,
        };
    }
    
    else{return state;}
};

export default rootReducer;