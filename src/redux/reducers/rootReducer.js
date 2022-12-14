
import {reset,solution,changeDraft,clearNumberError,changeAnswer,logout,login,newGame,changeWritting,increaseScore,gameOver} from '../reducerServices/reducerServices';

const initState = {
    numberError:[],
    name:'',
    score:[],
    gameOver:false,
    writting: 'answer',
    game: [
        {idx:0,lock:false, zone:0,row:0,col:0,draft:['','','','','','','','',''],answer:''},{idx:1,lock:false, zone:0,row:0,col:1,draft:['','','','','','','','',''],answer:''},{idx:2,lock:false, zone:0,row:0,col:2,draft:['','','','','','','','',''],answer:''},{idx:3,lock:false, zone:1,row:0,col:3,draft:['','','','','','','','',''],answer:''},{idx:4,lock:false, zone:1,row:0,col:4,draft:['','','','','','','','',''],answer:''},{idx:5,lock:false, zone:1,row:0,col:5,draft:['','','','','','','','',''],answer:''},{idx:6,lock:false, zone:2,row:0,col:6,draft:['','','','','','','','',''],answer:''},{idx:7,lock:false, zone:2,row:0,col:7,draft:['','','','','','','','',''],answer:''},{idx:8,lock:false, zone:2,row:0,col:8,draft:['','','','','','','','',''],answer:''},
        {idx:9,lock:false, zone:0,row:1,col:0,draft:['','','','','','','','',''],answer:''},{idx:10,lock:false, zone:0,row:1,col:1,draft:['','','','','','','','',''],answer:''},{idx:11,lock:false, zone:0,row:1,col:2,draft:['','','','','','','','',''],answer:''},{idx:12,lock:false, zone:1,row:1,col:3,draft:['','','','','','','','',''],answer:''},{idx:13,lock:false, zone:1,row:1,col:4,draft:['','','','','','','','',''],answer:''},{idx:14,lock:false, zone:1,row:1,col:5,draft:['','','','','','','','',''],answer:''},{idx:15,lock:false, zone:2,row:1,col:6,draft:['','','','','','','','',''],answer:''},{idx:16,lock:false, zone:2,row:1,col:7,draft:['','','','','','','','',''],answer:''},{idx:17,lock:false, zone:2,row:1,col:8,draft:['','','','','','','','',''],answer:''},
        {idx:18,lock:false, zone:0,row:2,col:0,draft:['','','','','','','','',''],answer:''},{idx:19,lock:false, zone:0,row:2,col:1,draft:['','','','','','','','',''],answer:''},{idx:20,lock:false, zone:0,row:2,col:2,draft:['','','','','','','','',''],answer:''},{idx:21,lock:false, zone:1,row:2,col:3,draft:['','','','','','','','',''],answer:''},{idx:22,lock:false, zone:1,row:2,col:4,draft:['','','','','','','','',''],answer:''},{idx:23,lock:false, zone:1,row:2,col:5,draft:['','','','','','','','',''],answer:''},{idx:24,lock:false, zone:2,row:2,col:6,draft:['','','','','','','','',''],answer:''},{idx:25,lock:false, zone:2,row:2,col:7,draft:['','','','','','','','',''],answer:''},{idx:26,lock:false, zone:2,row:2,col:8,draft:['','','','','','','','',''],answer:''},
        {idx:27,lock:false, zone:3,row:3,col:0,draft:['','','','','','','','',''],answer:''},{idx:28,lock:false, zone:3,row:3,col:1,draft:['','','','','','','','',''],answer:''},{idx:29,lock:false, zone:3,row:3,col:2,draft:['','','','','','','','',''],answer:''},{idx:30,lock:false, zone:4,row:3,col:3,draft:['','','','','','','','',''],answer:''},{idx:31,lock:false, zone:4,row:3,col:4,draft:['','','','','','','','',''],answer:''},{idx:32,lock:false, zone:4,row:3,col:5,draft:['','','','','','','','',''],answer:''},{idx:33,lock:false, zone:5,row:3,col:6,draft:['','','','','','','','',''],answer:''},{idx:34,lock:false, zone:5,row:3,col:7,draft:['','','','','','','','',''],answer:''},{idx:35,lock:false, zone:5,row:3,col:8,draft:['','','','','','','','',''],answer:''},
        {idx:36,lock:false, zone:3,row:4,col:0,draft:['','','','','','','','',''],answer:''},{idx:37,lock:false, zone:3,row:4,col:1,draft:['','','','','','','','',''],answer:''},{idx:38,lock:false, zone:3,row:4,col:2,draft:['','','','','','','','',''],answer:''},{idx:39,lock:false, zone:4,row:4,col:3,draft:['','','','','','','','',''],answer:''},{idx:40,lock:false, zone:4,row:4,col:4,draft:['','','','','','','','',''],answer:''},{idx:41,lock:false, zone:4,row:4,col:5,draft:['','','','','','','','',''],answer:''},{idx:42,lock:false, zone:5,row:4,col:6,draft:['','','','','','','','',''],answer:''},{idx:43,lock:false, zone:5,row:4,col:7,draft:['','','','','','','','',''],answer:''},{idx:44,lock:false, zone:5,row:4,col:8,draft:['','','','','','','','',''],answer:''},
        {idx:45,lock:false, zone:3,row:5,col:0,draft:['','','','','','','','',''],answer:''},{idx:46,lock:false, zone:3,row:5,col:1,draft:['','','','','','','','',''],answer:''},{idx:47,lock:false, zone:3,row:5,col:2,draft:['','','','','','','','',''],answer:''},{idx:48,lock:false, zone:4,row:5,col:3,draft:['','','','','','','','',''],answer:''},{idx:49,lock:false, zone:4,row:5,col:4,draft:['','','','','','','','',''],answer:''},{idx:50,lock:false, zone:4,row:5,col:5,draft:['','','','','','','','',''],answer:''},{idx:51,lock:false, zone:5,row:5,col:6,draft:['','','','','','','','',''],answer:''},{idx:52,lock:false, zone:5,row:5,col:7,draft:['','','','','','','','',''],answer:''},{idx:53,lock:false, zone:5,row:5,col:8,draft:['','','','','','','','',''],answer:''},
        {idx:54,lock:false, zone:6,row:6,col:0,draft:['','','','','','','','',''],answer:''},{idx:55,lock:false, zone:6,row:6,col:1,draft:['','','','','','','','',''],answer:''},{idx:56,lock:false, zone:6,row:6,col:2,draft:['','','','','','','','',''],answer:''},{idx:57,lock:false, zone:7,row:6,col:3,draft:['','','','','','','','',''],answer:''},{idx:58,lock:false, zone:7,row:6,col:4,draft:['','','','','','','','',''],answer:''},{idx:59,lock:false, zone:7,row:6,col:5,draft:['','','','','','','','',''],answer:''},{idx:60,lock:false, zone:8,row:6,col:6,draft:['','','','','','','','',''],answer:''},{idx:61,lock:false, zone:8,row:6,col:7,draft:['','','','','','','','',''],answer:''},{idx:62,lock:false, zone:8,row:6,col:8,draft:['','','','','','','','',''],answer:''},
        {idx:63,lock:false, zone:6,row:7,col:0,draft:['','','','','','','','',''],answer:''},{idx:64,lock:false, zone:6,row:7,col:1,draft:['','','','','','','','',''],answer:''},{idx:65,lock:false, zone:6,row:7,col:2,draft:['','','','','','','','',''],answer:''},{idx:66,lock:false, zone:7,row:7,col:3,draft:['','','','','','','','',''],answer:''},{idx:67,lock:false, zone:7,row:7,col:4,draft:['','','','','','','','',''],answer:''},{idx:68,lock:false, zone:7,row:7,col:5,draft:['','','','','','','','',''],answer:''},{idx:69,lock:false, zone:8,row:7,col:6,draft:['','','','','','','','',''],answer:''},{idx:70,lock:false, zone:8,row:7,col:7,draft:['','','','','','','','',''],answer:''},{idx:71,lock:false, zone:8,row:7,col:8,draft:['','','','','','','','',''],answer:''},
        {idx:72,lock:false, zone:6,row:8,col:0,draft:['','','','','','','','',''],answer:''},{idx:73,lock:false, zone:6,row:8,col:1,draft:['','','','','','','','',''],answer:''},{idx:74,lock:false, zone:6,row:8,col:2,draft:['','','','','','','','',''],answer:''},{idx:75,lock:false, zone:7,row:8,col:3,draft:['','','','','','','','',''],answer:''},{idx:76,lock:false, zone:7,row:8,col:4,draft:['','','','','','','','',''],answer:''},{idx:77,lock:false, zone:7,row:8,col:5,draft:['','','','','','','','',''],answer:''},{idx:78,lock:false, zone:8,row:8,col:6,draft:['','','','','','','','',''],answer:''},{idx:79,lock:false, zone:8,row:8,col:7,draft:['','','','','','','','',''],answer:''},{idx:80,lock:false, zone:8,row:8,col:8,draft:['','','','','','','','',''],answer:''},
    ],
    solution:[
        '0','0','0','0','0','0','0','0','0',
        '0','0','0','0','0','0','0','0','0',
        '0','0','0','0','0','0','0','0','0',
        '0','0','0','0','0','0','0','0','0',
        '0','0','0','0','0','0','0','0','0',
        '0','0','0','0','0','0','0','0','0',
        '0','0','0','0','0','0','0','0','0',
        '0','0','0','0','0','0','0','0','0',
        '0','0','0','0','0','0','0','0','0',
    ]
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'CHANGE_DRAFT') {
        return changeDraft(state,action);
    }
    if(action.type==='CLEAR_NUMBER_ERROR'){
        return clearNumberError(state,action);
    }
    if (action.type === 'CHANGE_ANSWER') {
        return changeAnswer(state,action);
    }
    if(action.type==='LOGIN'){
        return login(state,action);
    }
    if(action.type==='LOGOUT'){
        return logout(state,action);
    }
    if (action.type === 'CHANGE_WRITTING') {
        return changeWritting(state,action);
    }
    if (action.type === 'INCREASE_SCORE') {
        return increaseScore(state,action);
    }
    if (action.type === 'GAME_OVER') {
        return gameOver(state,action);
    }
    if (action.type === 'NEW_GAME') {
        return newGame(state,action);
    }
    if (action.type === 'RESET') {
        return reset(state,action);
    }
    if (action.type === 'SOLUTION') {
        return solution(state,action);
    }
    
    else{return state;}
};

export default rootReducer;