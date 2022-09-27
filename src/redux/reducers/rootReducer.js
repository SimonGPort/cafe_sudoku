const initState = {
    writting: 'answer',
    game: [
        {row:0,col:0,draft:['','','','','','','','',''],answer:''},{row:0,col:1,draft:['','','','','','','','',''],answer:''},{row:0,col:2,draft:['','','','','','','','',''],answer:''},{row:0,col:3,draft:['','','','','','','','',''],answer:''},{row:0,col:4,draft:['','','','','','','','',''],answer:''},{row:0,col:5,draft:['','','','','','','','',''],answer:''},{row:0,col:6,draft:['','','','','','','','',''],answer:''},{row:0,col:7,draft:['','','','','','','','',''],answer:''},{row:0,col:8,draft:['','','','','','','','',''],answer:''},{row:0,col:9,draft:['','','','','','','','',''],answer:''},
        {row:1,col:0,draft:['','','','','','','','',''],answer:''},{row:1,col:1,draft:['','','','','','','','',''],answer:''},{row:1,col:2,draft:['','','','','','','','',''],answer:''},{row:1,col:3,draft:['','','','','','','','',''],answer:''},{row:1,col:4,draft:['','','','','','','','',''],answer:''},{row:1,col:5,draft:['','','','','','','','',''],answer:''},{row:1,col:6,draft:['','','','','','','','',''],answer:''},{row:1,col:7,draft:['','','','','','','','',''],answer:''},{row:1,col:8,draft:['','','','','','','','',''],answer:''},{row:0,col:9,draft:['','','','','','','','',''],answer:''},
        {row:2,col:0,draft:['','','','','','','','',''],answer:''},{row:2,col:1,draft:['','','','','','','','',''],answer:''},{row:2,col:2,draft:['','','','','','','','',''],answer:''},{row:2,col:3,draft:['','','','','','','','',''],answer:''},{row:2,col:4,draft:['','','','','','','','',''],answer:''},{row:2,col:5,draft:['','','','','','','','',''],answer:''},{row:2,col:6,draft:['','','','','','','','',''],answer:''},{row:2,col:7,draft:['','','','','','','','',''],answer:''},{row:2,col:8,draft:['','','','','','','','',''],answer:''},{row:2,col:9,draft:['','','','','','','','',''],answer:''},
        {row:3,col:0,draft:['','','','','','','','',''],answer:''},{row:3,col:1,draft:['','','','','','','','',''],answer:''},{row:3,col:2,draft:['','','','','','','','',''],answer:''},{row:3,col:3,draft:['','','','','','','','',''],answer:''},{row:3,col:4,draft:['','','','','','','','',''],answer:''},{row:3,col:5,draft:['','','','','','','','',''],answer:''},{row:3,col:6,draft:['','','','','','','','',''],answer:''},{row:3,col:7,draft:['','','','','','','','',''],answer:''},{row:3,col:8,draft:['','','','','','','','',''],answer:''},{row:3,col:9,draft:['','','','','','','','',''],answer:''},
        {row:4,col:0,draft:['','','','','','','','',''],answer:''},{row:4,col:1,draft:['','','','','','','','',''],answer:''},{row:4,col:2,draft:['','','','','','','','',''],answer:''},{row:4,col:3,draft:['','','','','','','','',''],answer:''},{row:4,col:4,draft:['','','','','','','','',''],answer:''},{row:4,col:5,draft:['','','','','','','','',''],answer:''},{row:4,col:6,draft:['','','','','','','','',''],answer:''},{row:4,col:7,draft:['','','','','','','','',''],answer:''},{row:4,col:8,draft:['','','','','','','','',''],answer:''},{row:4,col:9,draft:['','','','','','','','',''],answer:''},
        {row:5,col:0,draft:['','','','','','','','',''],answer:''},{row:5,col:1,draft:['','','','','','','','',''],answer:''},{row:5,col:2,draft:['','','','','','','','',''],answer:''},{row:5,col:3,draft:['','','','','','','','',''],answer:''},{row:5,col:4,draft:['','','','','','','','',''],answer:''},{row:5,col:5,draft:['','','','','','','','',''],answer:''},{row:5,col:6,draft:['','','','','','','','',''],answer:''},{row:5,col:7,draft:['','','','','','','','',''],answer:''},{row:5,col:8,draft:['','','','','','','','',''],answer:''},{row:5,col:9,draft:['','','','','','','','',''],answer:''},
        {row:6,col:0,draft:['','','','','','','','',''],answer:''},{row:6,col:1,draft:['','','','','','','','',''],answer:''},{row:6,col:2,draft:['','','','','','','','',''],answer:''},{row:6,col:3,draft:['','','','','','','','',''],answer:''},{row:6,col:4,draft:['','','','','','','','',''],answer:''},{row:6,col:5,draft:['','','','','','','','',''],answer:''},{row:6,col:6,draft:['','','','','','','','',''],answer:''},{row:6,col:7,draft:['','','','','','','','',''],answer:''},{row:6,col:8,draft:['','','','','','','','',''],answer:''},{row:6,col:9,draft:['','','','','','','','',''],answer:''},
        {row:7,col:0,draft:['','','','','','','','',''],answer:''},{row:7,col:1,draft:['','','','','','','','',''],answer:''},{row:7,col:2,draft:['','','','','','','','',''],answer:''},{row:7,col:3,draft:['','','','','','','','',''],answer:''},{row:7,col:4,draft:['','','','','','','','',''],answer:''},{row:7,col:5,draft:['','','','','','','','',''],answer:''},{row:7,col:6,draft:['','','','','','','','',''],answer:''},{row:7,col:7,draft:['','','','','','','','',''],answer:''},{row:7,col:8,draft:['','','','','','','','',''],answer:''},{row:7,col:9,draft:['','','','','','','','',''],answer:''},
        {row:8,col:0,draft:['','','','','','','','',''],answer:''},{row:8,col:1,draft:['','','','','','','','',''],answer:''},{row:8,col:2,draft:['','','','','','','','',''],answer:''},{row:8,col:3,draft:['','','','','','','','',''],answer:''},{row:8,col:4,draft:['','','','','','','','',''],answer:''},{row:8,col:5,draft:['','','','','','','','',''],answer:''},{row:8,col:6,draft:['','','','','','','','',''],answer:''},{row:8,col:7,draft:['','','','','','','','',''],answer:''},{row:8,col:8,draft:['','','','','','','','',''],answer:''},{row:0,col:9,draft:['','','','','','','','',''],answer:''},
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
    if (action.type === 'CHANGE_WRITTING') {
        return {
            ...state,
            writting: action.writting,
        };
    }
    
    else{return state;}
};

export default rootReducer;