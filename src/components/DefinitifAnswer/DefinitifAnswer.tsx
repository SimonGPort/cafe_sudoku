import React,{ChangeEvent}  from 'react';
import {AnswerInput} from './style';
import { useSelector } from 'react-redux';
import {state} from '../../interface/state';
import inputValidation from '../../services/inputValidation';
import { useDispatch } from 'react-redux';
import  {changeAnswer} from '../../redux/actions/changeAnswer';

interface FuncProps{
    thisRow:number,
    thisCol:number
}

const DefinitifAnswer : React.FC<FuncProps>=({thisRow,thisCol})=>{
    const dispatch = useDispatch();
    const game=useSelector((state:state) => state.game);
    const answer:string=game?.filter((square)=>{return square.row===thisRow && square.col===thisCol;})[0]['answer'];

    const modificationAnswer=(event:string,row:number,col:number):void=>{
        const validation=inputValidation(event);
        if(!validation){return;}
        dispatch(changeAnswer(event,row,col));
    };

    return(
        <AnswerInput value={answer} onChange={(evt:ChangeEvent<HTMLInputElement>)=>{modificationAnswer(evt.target.value,thisRow,thisCol);}}/>
    );
};

export default DefinitifAnswer;