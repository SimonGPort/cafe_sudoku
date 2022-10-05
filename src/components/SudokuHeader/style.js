import styled from 'styled-components';
import color from '../../util/color';

export const Container=styled.div`
display:flex;
width:36rem;
margin-right:auto;
margin-left:auto;
border: 0.2rem black solid;
box-sizing: border-box;
align-items:center;
justify-content:space-around;
font-size:xx-large;
border-radius: 15px 15px 0px 0px;
`;

export const ScoreContainer=styled.div`
display:flex;
align-items:center;
`;

export const ButtonPen=styled.button`
cursor: ${props=>(props.writting==='answer'?'revert':'pointer')};;
background-color:${props=>(props.writting==='answer'?color.actifPenButtonBackground:'revert')};
`;

export const ButtonPencil=styled.button`
cursor: ${props=>(props.writting==='draft'?'revert':'pointer')};;;
background-color:${props=>(props.writting==='draft'?color.actifPencilButtonBackground:'revert')};
`;