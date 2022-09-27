import inputValidation from './inputValidation';
import { useDispatch } from 'react-redux';
import  {changeDraft as changeDraftAnswer} from '../redux/actions/changeDraft';

const changeDraft=(event:string,row:number,col:number,index:number):void=>{
    const dispatch = useDispatch();

    const validation=inputValidation(event);
    if(!validation){return;}
    dispatch(changeDraftAnswer(event,row,col,index));
};

export default changeDraft;