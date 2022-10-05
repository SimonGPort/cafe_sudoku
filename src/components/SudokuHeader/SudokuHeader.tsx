import React from 'react';
import {Container, ButtonPen, ButtonPencil,ScoreContainer} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { changeWritting } from '../../redux/actions/changeWritting';
import {state} from '../../interface/state';
import text from '../../util/text';

const SudokuHeader : React.FC=()=>{

    const writting = useSelector((state:state) => state.writting);
    const score = useSelector((state:state) => state.score);
    const dispatch = useDispatch();

    return(
        <Container>
            <div>{text.header.en}</div>
            <ScoreContainer><img src="fire-black.png" /> {score.length}</ScoreContainer>
            <div>
                <ButtonPencil writting={writting} onClick={()=>{dispatch(changeWritting('draft'));}}>
                    <img src="lead-pencil-black.png" />
                </ButtonPencil>
                <ButtonPen writting={writting} onClick={()=>{dispatch(changeWritting('answer'));}}>
                    <img src="pen-black.png" />
                </ButtonPen></div>
        </Container>
    );
};

export default SudokuHeader;