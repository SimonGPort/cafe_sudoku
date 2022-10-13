import problems from '../../problems/problems';

export const changeDraft=(state,action)=>{
    const indexSquare=state.game.findIndex((square)=>{return square.row===action.row && square.col===action.col;});
    const gameTemp=[...state.game];
    gameTemp[indexSquare]['draft'][action.index]=action.event;
    return {
        ...state,
        game: gameTemp,
    };
};

export const clearNumberError=(state)=>{
    return {...state,numberError:{row:null,col:null}};
};

export const changeAnswer=(state,action)=>{
    const indexSquare=state.game.findIndex((square)=>{return square.row===action.row && square.col===action.col;});
        
    const sameRow=[...state.game].filter((square)=>{return square.row===action.row;}).map((square)=>{return square.answer;});
    const sameCol=[...state.game].filter((square)=>{return square.col===action.col;}).map((square)=>{return square.answer;});
    const sameZone=[...state.game].filter((square)=>{return square.zone===state.game[indexSquare]['zone'];}).map((square)=>{return square.answer;});
    const numberRepeated=sameRow.includes(action.event) || sameCol.includes(action.event) || sameZone.includes(action.event);
    if(action.event!=='' && numberRepeated){return {...state, numberError:{row:action.row,col:action.col}};}
    
    const gameTemp=[...state.game];
    gameTemp[indexSquare]['answer']=action.event;
    gameTemp[indexSquare]['draft']=['','','','','','','','',''];

    return {
        ...state,
        game: gameTemp,
    };
};

export const logout=(state)=>{
    return{
        ...state,
        name:'',
        score:[]
    };
};

export const login=(state,action)=>{
    return {
        ...state,
        name: action.name,
        score:action.score
    };
};

export const changeWritting=(state,action)=>{
    return {
        ...state,
        writting: action.writting,
    };
};

export const increaseScore=(state,action)=>{
    let scoreTemp=[...state.score];
    scoreTemp.push(action.newDate);
    return {
        ...state,
        score: scoreTemp,
    };
};

export const gameOver=(state,action)=>{
    return {
        ...state,
        gameOver: action.status,
    };
};

export const newGame=(state)=>{
    const max=1;
    const randomIndex=Math.floor(Math.random() * (max + 1));
    const newGame=problems[randomIndex]['game'];
    const newSolution=problems[randomIndex]['solution'];
    return {
        ...state,
        game: newGame,
        solution:newSolution
    };
};