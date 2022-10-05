import React from 'react';
import SudokuHeader from '../components/SudokuHeader/SudokuHeader';
import SudokuMain from '../components/SudokuMain/SudokuMain';
import color from '../util/color';

const SudokuView : React.FC=()=>{
    return(
        <div style={containerStyle}>
            <SudokuHeader/>
            <SudokuMain/>
        </div>
    );
};

const containerStyle={
    backgroundColor:color.backgroundSudokuView,
    width:'fit-content',
    margin:'auto'
};

export default SudokuView;
