import React from 'react';
import SudokuHeader from '../components/SudokuHeader/SudokuHeader';
import SudokuMain from '../components/SudokuMain/SudokuMain';

const SudokuView : React.FC=()=>{
    return(
        <div>
            <SudokuHeader/>
            <SudokuMain/>
        </div>
    );
};

export default SudokuView;
