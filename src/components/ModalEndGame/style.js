import styled from 'styled-components';
import color from '../../util/color';

export const Wrapper=styled.div`
height: 100vh;
`;

export const Container=styled.div`
font-size:xx-large;
align-items:center;
display:flex;
position: absolute;
top: 30%;  
left: 50%; 
transform: translate(-50%, -50%);
background-color:${color.modalEndGameBackground};
border-radius:15px 15px 15px 15px;
width:18rem;
padding:1rem;
border:black 3px solid;
justify-content: space-around;
color:
`;

export const ScoreContainer=styled.div`
display:flex;
align-items:center;
`;