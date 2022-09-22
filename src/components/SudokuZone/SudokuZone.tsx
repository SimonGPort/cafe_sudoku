import React from 'react';
import SudokuSquare from '../sudokuSquare/sudokuSquare';
import {Container,SudokuRow} from './style';

interface FuncProps{
    borderOutline:[number,number,number,number]
}

const SudokuZone : React.FC<FuncProps>=({borderOutline})=>{
    return(
        <Container borderOutline={borderOutline}>
            <SudokuRow>
                <SudokuSquare borderOutline={[0,0,0,0]}/>
                <SudokuSquare borderOutline={[0,1,0,1]}/>
                <SudokuSquare borderOutline={[0,0,0,0]}/>
            </SudokuRow>
            <SudokuRow>
                <SudokuSquare borderOutline={[1,0,1,0]}/>
                <SudokuSquare borderOutline={[1,1,1,1]}/>
                <SudokuSquare borderOutline={[1,0,1,0]}/>
            </SudokuRow>
            <SudokuRow>
                <SudokuSquare borderOutline={[0,0,0,0]}/>
                <SudokuSquare borderOutline={[0,1,0,1]}/>
                <SudokuSquare borderOutline={[0,0,0,0]}/>
            </SudokuRow>



        </Container>
    );
};

export default SudokuZone;