import React,{useEffect} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SudokuView from './view/SudokuView';
// import {connect} from 'react-redux';
import './App.css';
import Login from './view/Login';
import Register from './view/Register';
import { useDispatch, useSelector } from 'react-redux';
import  {newGame} from './redux/actions/newGame';
import  {gameOver} from './redux/actions/gameOver';
import  {increaseScore} from './redux/actions/increaseScore';
import validationGameEnd from './services/validationGameEnd';
import {state} from './interface/state';
import getDate from './util/getDate';
import {getTicket} from './util/localStorage';
import { useMutation } from '@apollo/client';
import { NEWSCORE } from './graphQL/Mutations';
import {clearNumberError} from './redux/actions/clearNumberError';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>,
    },
    {
        path: '/main',
        element: <SudokuView/>,
    },
]);

const App: React.FC=()=> {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(newGame());
    },[]);

    const game=useSelector((state:state) => state.game);
    const numberError=useSelector((state:state) => state.numberError);
    const solution=useSelector((state:state) => state.solution);
    const [newScore,{error}]=useMutation(NEWSCORE);

    useEffect(()=>{
        if(validationGameEnd(game,solution)){
            dispatch(gameOver(true));
            const date=getDate();
            dispatch(increaseScore(date));
            const ticket=getTicket();
            if(ticket){
                newScore({
                    variables:{
                        id:ticket,date
                    }
                });
                if(error){
                    console.log('error newScore:',error);
                }
            }
        }
    },[game]);

    useEffect(()=>{
        setTimeout(function(){ 
            dispatch(clearNumberError());
        }, 1000)
        ;
    },[numberError]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
