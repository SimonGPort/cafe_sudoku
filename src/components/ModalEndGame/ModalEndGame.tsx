import React from 'react';
import {Container,ScoreContainer,Wrapper} from './style';
import text from '../../util/text';

const ModalEndGame : React.FC=()=>{
    return(
        <Wrapper>
            <Container>
                <div>{text.gameOver.en}</div>
                <ScoreContainer>
                    <img src="fire-black.png"/>
                +1
                </ScoreContainer>

            </Container>
        </Wrapper>
    );
};

export default ModalEndGame;