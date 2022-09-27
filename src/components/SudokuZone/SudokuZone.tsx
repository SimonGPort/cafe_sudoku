import React from 'react';
import SudokuSquare from '../sudokuSquare/sudokuSquare';
import {Container,SudokuRow} from './style';

interface FuncProps{
    borderOutline:[number,number,number,number],
    rowRange:[number,number,number],
    colRange:[number,number,number],
}

const SudokuZone : React.FC<FuncProps>=({borderOutline,rowRange,colRange})=>{
    return(
        <Container borderOutline={borderOutline}>
            <SudokuRow>
                <SudokuSquare borderOutline={[0,0,0,0]} thisRow={rowRange[0]} thisCol={colRange[0]}/>
                <SudokuSquare borderOutline={[0,1,0,1]} thisRow={rowRange[0]} thisCol={colRange[1]}/>
                <SudokuSquare borderOutline={[0,0,0,0]} thisRow={rowRange[0]} thisCol={colRange[2]}/>
            </SudokuRow>
            <SudokuRow>
                <SudokuSquare borderOutline={[1,0,1,0]} thisRow={rowRange[1]} thisCol={colRange[0]}/>
                <SudokuSquare borderOutline={[1,1,1,1]} thisRow={rowRange[1]} thisCol={colRange[1]}/>
                <SudokuSquare borderOutline={[1,0,1,0]} thisRow={rowRange[1]} thisCol={colRange[2]}/>
            </SudokuRow>
            <SudokuRow>
                <SudokuSquare borderOutline={[0,0,0,0]} thisRow={rowRange[2]} thisCol={colRange[0]}/>
                <SudokuSquare borderOutline={[0,1,0,1]} thisRow={rowRange[2]} thisCol={colRange[1]}/>
                <SudokuSquare borderOutline={[0,0,0,0]} thisRow={rowRange[2]} thisCol={colRange[2]}/>
            </SudokuRow>



        </Container>
    );
};

export default SudokuZone;