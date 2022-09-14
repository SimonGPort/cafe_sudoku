import React from 'react';
import {connect} from 'react-redux';
import './App.css';

function App() {

    //The api is fetch here and then send to the redux store
    // METTRE DANS UN USEEFFECT
    // componentDidMount(){
    //     fetchBrew().then(res => {
    //        this.props.fetchBrewAction(res)
    //     })
    // }

    return (
        <div className="App">
           test
        </div>
    );
}

// //Connection to the store
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         fetchBrewAction:(products)=>{dispatch(fetchBrewAction(products))}
//     }
// }

// export default connect(undefined,mapDispatchToProps)(App)
export default App;
