import React,{ChangeEvent} from 'react';
import {AnswerInput,Row,Container} from './style';
import { useSelector } from 'react-redux';
import {state} from '../../interface/state';
import {square} from '../../interface/state';
import inputValidation from '../../services/inputValidation';
import { useDispatch } from 'react-redux';
import  {changeDraft as changeDraftAnswer} from '../../redux/actions/changeDraft';

interface FuncProps{
    thisRow:number,
    thisCol:number
}

const DefinitifAnswer : React.FC<FuncProps>=({thisRow,thisCol})=>{
    const dispatch = useDispatch();

    const writting = useSelector((state:state) => state.writting);
    const game=useSelector((state:state) => state.game);
    const square:square=game?.filter((square)=>{return square.row===thisRow && square.col===thisCol;})[0];
    
    const changeDraft=(event:string,row:number,col:number,index:number):void=>{
        const validation=inputValidation(event);
        if(!validation){return;}
        dispatch(changeDraftAnswer(event,row,col,index));
    };

    return(
        <Container writting={writting}>
            <Row >
                <AnswerInput value={square['draft'][0]} onChange={(evt:ChangeEvent<HTMLInputElement>)=>{changeDraft(evt.target.value,thisRow,thisCol,0);}}/>
                <AnswerInput value={square['draft'][1]} onChange={(evt:ChangeEvent<HTMLInputElement>)=>{changeDraft(evt.target.value,thisRow,thisCol,1);}}/>
                <AnswerInput value={square['draft'][2]} onChange={(evt:ChangeEvent<HTMLInputElement>)=>{changeDraft(evt.target.value,thisRow,thisCol,2);}}/>
            </Row>
            <Row>
                <AnswerInput value={square['draft'][3]} onChange={(evt:ChangeEvent<HTMLInputElement>)=>{changeDraft(evt.target.value,thisRow,thisCol,3);}}/>
                <AnswerInput value={square['draft'][4]} onChange={(evt:ChangeEvent<HTMLInputElement>)=>{changeDraft(evt.target.value,thisRow,thisCol,4);}}/>
                <AnswerInput value={square['draft'][5]} onChange={(evt:ChangeEvent<HTMLInputElement>)=>{changeDraft(evt.target.value,thisRow,thisCol,5);}}/>
            </Row>
            <Row>
                <AnswerInput value={square['draft'][6]} onChange={(evt:ChangeEvent<HTMLInputElement>)=>{changeDraft(evt.target.value,thisRow,thisCol,6);}}/>
                <AnswerInput value={square['draft'][7]} onChange={(evt:ChangeEvent<HTMLInputElement>)=>{changeDraft(evt.target.value,thisRow,thisCol,7);}}/>
                <AnswerInput value={square['draft'][8]} onChange={(evt:ChangeEvent<HTMLInputElement>)=>{changeDraft(evt.target.value,thisRow,thisCol,8);}}/>
            </Row>
        </Container>
    );
};

export default DefinitifAnswer;