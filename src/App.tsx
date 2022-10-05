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
    const solution=useSelector((state:state) => state.solution);

    useEffect(()=>{
        if(validationGameEnd(game,solution)){
            dispatch(gameOver(true));
            dispatch(increaseScore(new Date));
        }
    },[game]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
};

// //Connection to the store
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         fetchBrewAction:(products)=>{dispatch(fetchBrewAction(products))}
//     }
// }

// export default connect(undefined,mapDispatchToProps)(App)
export default App;
