import styled from 'styled-components';

export const AnswerInput=styled.input`
width:80%;
height:75%;
outline:none;
font-size: 20px;
border:0;
text-align: center;
position:absolute;
background: ${props=>(props.lock?'grey':'rgb(255 255 255 / 50%)')};
`;