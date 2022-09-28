import React from 'react';
import SudokuZone from '../SudokuZone/SudokuZone';
import {Container,SudokuRow} from './style';

const SudokuMain : React.FC=()=>{
    return(
        <Container>
            <SudokuRow>
                <SudokuZone borderOutline={[0,0,1,1]} rowRange={[0,1,2]} colRange={[0,1,2]}/>
                <SudokuZone borderOutline={[0,0,1,1]} rowRange={[0,1,2]} colRange={[3,4,5]}/>
                <SudokuZone borderOutline={[0,1,1,1]} rowRange={[0,1,2]} colRange={[6,7,8]}/>
            </SudokuRow>

            <SudokuRow>
                <SudokuZone borderOutline={[0,0,1,1]} rowRange={[3,4,5]} colRange={[0,1,2]}/>
                <SudokuZone borderOutline={[0,0,1,1]} rowRange={[3,4,5]} colRange={[3,4,5]}/>
                <SudokuZone borderOutline={[0,1,1,1]} rowRange={[3,4,5]} colRange={[6,7,8]}/>
            </SudokuRow>

            <SudokuRow>
                <SudokuZone borderOutline={[0,0,1,1]} rowRange={[6,7,8]} colRange={[0,1,2]}/>
                <SudokuZone borderOutline={[0,0,1,1]} rowRange={[6,7,8]} colRange={[3,4,5]}/>
                <SudokuZone borderOutline={[0,1,1,1]} rowRange={[6,7,8]} colRange={[6,7,8]}/>
            </SudokuRow>
        </Container>
    );
};

export default SudokuMain;