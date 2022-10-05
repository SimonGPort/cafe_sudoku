import styled from 'styled-components';
import color from '../../util/color';

export const AnswerInput=styled.input`
width:10%;
outline:none;
font-size: 10px;
border:0;
text-align: center;
position:absolue;
background: ${props=>(props.writting==='draft'||!props.isArrayEmpty?'rgba(204, 204, 204, 0.5)':'color.backgroundSudokuView')};
`;

export const Row=styled.div`
display:flex;
justify-content: space-evenly;
`;

export const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 80%;
z-index:${props=>(props.writting==='draft'?'1':'revert')};
`;