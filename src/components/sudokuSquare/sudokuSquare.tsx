import React from 'react';
import DefinitifAnswer from '../DefinitifAnswer/DefinitifAnswer';
import {Container} from './style';

interface FuncProps{
    borderOutline:[number,number,number,number]
}

const SudokuSquare : React.FC<FuncProps>=({borderOutline})=>{
    return(
        <Container borderOutline={borderOutline}>
            {/* <DraftContainer/> */}
            <DefinitifAnswer/>
        </Container>
    );
};

export default SudokuSquare;