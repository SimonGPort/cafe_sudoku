import React from 'react';
import {Container} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { changeWritting } from '../../redux/actions/changeWritting';
import {state} from '../../interface/state';

const SudokuHeader : React.FC=()=>{

    const writting = useSelector((state:state) => state.writting);
    const score = useSelector((state:state) => state.score);
    const dispatch = useDispatch();

    return(
        <Container>
            <div>cafe sudoku</div>
            <div>{writting}</div>
            <div>
                <button onClick={()=>{dispatch(changeWritting('draft'));}}>Draft</button>
            </div>
            <div><button onClick={()=>{dispatch(changeWritting('answer'));}}>Answer</button></div>
            <div>Score: {score.length}</div>
        </Container>
    );
};

export default SudokuHeader;