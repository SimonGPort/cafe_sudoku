import React from 'react';
import DefinitifAnswer from '../DefinitifAnswer/DefinitifAnswer';
import DraftContainer from '../DraftContainer/DraftContainer';
import {Container} from './style';


interface FuncProps{
    borderOutline:[number,number,number,number]
}

const SudokuSquare : React.FC<FuncProps>=({borderOutline})=>{
    return(
        <Container borderOutline={borderOutline}>
            <DefinitifAnswer/>
            <DraftContainer/>
        </Container>
    );
};

export default SudokuSquare;