import React from 'react';
import {AnswerInput,Row,Container} from './style';
import { useSelector } from 'react-redux';
import {state} from '../../interface/state';

const DefinitifAnswer : React.FC=()=>{
    const writting = useSelector((state:state) => state.writting);
    return(
        <Container writting={writting}>
            <Row >
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