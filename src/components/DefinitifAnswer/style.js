import styled from 'styled-components';
import color from '../../util/color';

export const AnswerInput=styled.input`
width:80%;
height:75%;
outline:none;
font-size: 2em;
border:0;
text-align: center;
position:absolute;
background: ${props=>(
        props.numberError.col===props.thisCol&&props.numberError.row===props.thisRow?color.squareError:props.lock?color.blockSquare:color.openSquare)};
color:${props=>(props.lock?color.answerBlockText:color.answerOpenText)};
`;