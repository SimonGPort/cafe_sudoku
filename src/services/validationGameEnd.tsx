import {square} from '../interface/state';

const validationGameEnd=(game:Array<square>,solution:Array<string>):boolean=>{
    let result=true;
    for (let i = 0; i < 81; i++) {
        const squareResult=game.find((elem)=>{return elem.idx===i;});
        if(squareResult){
            if(squareResult.answer!==solution[i]){result=false;}
        }
    }
    return result;
};
export default validationGameEnd;