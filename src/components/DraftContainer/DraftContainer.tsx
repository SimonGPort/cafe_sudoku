import React from 'react';
import {AnswerInput,Row,Container} from './style';


const DefinitifAnswer : React.FC=()=>{
    return(
        <Container>
            <Row>
                <AnswerInput/>
                <AnswerInput/>
                <AnswerInput/>
            </Row>
            <Row>
                <AnswerInput/>
                <AnswerInput/>
                <AnswerInput/>
            </Row>
            <Row>
                <AnswerInput/>
                <AnswerInput/>
                <AnswerInput/>
            </Row>
        </Container>
    );
};

export default DefinitifAnswer;