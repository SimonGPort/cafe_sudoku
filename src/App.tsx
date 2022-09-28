import React,{useEffect} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SudokuView from './view/SudokuView';
// import {connect} from 'react-redux';
import './App.css';
import Login from './view/Login';
import Register from './view/Register';
import { useDispatch } from 'react-redux';
import  {newGame} from './redux/actions/newGame';

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
    //The api is fetch here and then send to the redux store
    // METTRE DANS UN USEEFFECT
    // componentDidMount(){
    //     fetchBrew().then(res => {
    //        this.props.fetchBrewAction(res)
    //     })
    // }
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(newGame());
    },[]);

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
