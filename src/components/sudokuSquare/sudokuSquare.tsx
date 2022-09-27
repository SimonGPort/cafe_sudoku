import React from 'react';
import DefinitifAnswer from '../DefinitifAnswer/DefinitifAnswer';
import DraftContainer from '../DraftContainer/DraftContainer';
import {Container} from './style';


interface FuncProps{
    borderOutline:[number,number,number,number]
    thisRow:number,
    thisCol:number
}

const SudokuSquare : React.FC<FuncProps>=({borderOutline,thisRow,thisCol})=>{
    return(
        <Container borderOutline={borderOutline}>
            <DefinitifAnswer thisRow={thisRow} thisCol={thisCol}/>
            <DraftContainer thisRow={thisRow} thisCol={thisCol}/>
        </Container>
    );
};

export default SudokuSquare;