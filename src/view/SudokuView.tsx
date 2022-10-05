import React from 'react';
import SudokuHeader from '../components/SudokuHeader/SudokuHeader';
import SudokuMain from '../components/SudokuMain/SudokuMain';
import color from '../util/color';

const SudokuView : React.FC=()=>{
    return(<>
        <div style={logOutStyle}>
            <button style={logoutButtonStyle}>
                <img src="logout.png"/>
            </button>
        </div>
        <div style={containerStyle}>
            <SudokuHeader/>
            <SudokuMain/>
        </div>
    </>
    );
};

const containerStyle={
    backgroundColor:color.backgroundSudokuView,
    width:'fit-content',
    margin:'auto',
    borderRadius:'15px 15px 0px 0px'
};

const logOutStyle={
    textAlign: 'right' as const,
    marginRight: '1em',
    marginTop: '1em',

};
const logoutButtonStyle={
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#28b6fa',
};

export default SudokuView;
