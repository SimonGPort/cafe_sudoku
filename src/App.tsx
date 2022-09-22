import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SudokuMain from './view/SudokuMain';
// import {connect} from 'react-redux';
import './App.css';
import Login from './view/Login';
import Register from './view/Register';

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
        element: <SudokuMain/>,
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
