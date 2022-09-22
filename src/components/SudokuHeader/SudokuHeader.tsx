import React from 'react';
import {Container} from './style';

const SudokuHeader : React.FC=()=>{
    return(
        <Container>
            <div>cafe sudoku</div>
            <div>
                <button/>
            </div>
            <div><button/></div>
            <div>Score</div>
        </Container>
    );
};

export default SudokuHeader;