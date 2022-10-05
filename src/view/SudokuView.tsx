import React, {useEffect,useState} from 'react';
import SudokuHeader from '../components/SudokuHeader/SudokuHeader';
import SudokuMain from '../components/SudokuMain/SudokuMain';
import color from '../util/color';
import { useDispatch, useSelector } from 'react-redux';
import {state} from '../interface/state';
import {newGame} from '../redux/actions/newGame';
import ModalEndGame from '../components/ModalEndGame/ModalEndGame';
import {useNavigate} from 'react-router-dom';


const SudokuView : React.FC=()=>{

    const navigate = useNavigate();
    const [isModalEndGame,setIsModalEndGame]=useState<boolean>(false);

    const gameOver=useSelector((state:state) => state.gameOver);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(gameOver){
            setIsModalEndGame(true);
            dispatch(newGame());
            setTimeout(function(){setIsModalEndGame(false);},3000);
        }
    },[gameOver]);

    return(<>
        <div style={logOutStyle}>
            <button style={logoutButtonStyle} onClick={()=>{navigate('/');}}>
                <img src="logout.png"/>
            </button>
        </div>
        <div style={containerStyle}>
            <SudokuHeader/>
            <SudokuMain/>
        </div>
        {isModalEndGame && <ModalEndGame/>}
    </>
    );
};

const containerStyle={
    backgroundColor:color.backgroundSudokuView,
    width:'fit-content',
    margin:'auto',
    borderRadius:'15px 15px 0px 0px'
};

const logOutStyle={
    textAlign: 'right' as const,
    marginRight: '1em',
    marginTop: '1em',

};
const logoutButtonStyle={
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#28b6fa',
};

export default SudokuView;
