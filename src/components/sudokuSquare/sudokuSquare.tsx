import React from 'react';
import DefinitifAnswer from '../DefinitifAnswer/DefinitifAnswer';
import DraftContainer from '../DraftContainer/DraftContainer';
import {Container} from './style';
import { useSelector } from 'react-redux';
import {state} from '../../interface/state';


interface FuncProps{
    borderOutline:[number,number,number,number]
    thisRow:number,
    thisCol:number
}

const SudokuSquare : React.FC<FuncProps>=({borderOutline,thisRow,thisCol})=>{
    const game=useSelector((state:state) => state.game);
    const lock:string=game?.filter((square)=>{return square.row===thisRow && square.col===thisCol;})[0]['lock'];
    
    return(
        <Container thisRow={thisRow} lock={lock} borderOutline={borderOutline}>
            <DefinitifAnswer thisRow={thisRow} thisCol={thisCol}/>
            {!lock && <DraftContainer thisRow={thisRow} thisCol={thisCol}/>}
        </Container>
    );
};

export default SudokuSquare;