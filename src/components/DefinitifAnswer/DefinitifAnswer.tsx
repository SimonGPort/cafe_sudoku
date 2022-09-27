import React from 'react';
import {AnswerInput} from './style';

interface FuncProps{
    thisRow:number,
    thisCol:number
}

const DefinitifAnswer : React.FC<FuncProps>=()=>{
    return(
        <AnswerInput/>
    );
};

export default DefinitifAnswer;