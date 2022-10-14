import React, {useEffect,useState} from 'react';
import SudokuHeader from '../components/SudokuHeader/SudokuHeader';
import SudokuMain from '../components/SudokuMain/SudokuMain';
import color from '../util/color';
import { useDispatch, useSelector } from 'react-redux';
import {state} from '../interface/state';
import {newGame} from '../redux/actions/newGame';
import ModalEndGame from '../components/ModalEndGame/ModalEndGame';
import {AUTOLOGIN} from '../graphQL/Queries';
import { useQuery } from '@apollo/client';
import {login} from '../redux/actions/login';
import {getTicket} from '../util/localStorage';
import TopHeader from '../components/TopHeader/TopHeader';


const SudokuView : React.FC=()=>{

    const [isModalEndGame,setIsModalEndGame]=useState<boolean>(false);

    const gameOver=useSelector((state:state) => state.gameOver);
    const dispatch = useDispatch();

    const [id,setId]=useState('');
    // eslint-disable-next-line
    const {error,loading,data}=useQuery(AUTOLOGIN,{variables:{id}});

    useEffect(()=>{autoLogin();},[]);

    useEffect(()=>{
        if(data && data.autoLogin.success.result){
            dispatch(login(data.autoLogin.user.name,data.autoLogin.user.score));
        }
    },[data]);

    useEffect(()=>{
        if(gameOver){
            setIsModalEndGame(true);
            dispatch(newGame());
            setTimeout(function(){setIsModalEndGame(false);},3000);
        }
    },[gameOver]);

    const autoLogin=()=>{
        const ticket=getTicket();
        if(ticket){
            setId(ticket);
        }
    };

    return(<>
        <TopHeader/>
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

export default SudokuView;
