import React from 'react';
import SudokuZone from '../SudokuZone/SudokuZone';
import {Container,SudokuRow} from './style';

const SudokuMain : React.FC=()=>{
    return(
        <Container>
            <SudokuRow>
                <SudokuZone borderOutline={[0,0,0,1]}/>
                <SudokuZone borderOutline={[0,1,0,1]}/>
                <SudokuZone borderOutline={[0,1,0,0]}/>
            </SudokuRow>

            <SudokuRow>
                <SudokuZone borderOutline={[1,0,1,1]}/>
                <SudokuZone borderOutline={[1,1,1,1]}/>
                <SudokuZone borderOutline={[1,1,1,0]}/>
            </SudokuRow>

            <SudokuRow>
                <SudokuZone borderOutline={[0,0,1,1]}/>
                <SudokuZone borderOutline={[0,1,1,1]}/>
                <SudokuZone borderOutline={[0,1,1,0]}/>
            </SudokuRow>
        </Container>
    );
};

export default SudokuMain;