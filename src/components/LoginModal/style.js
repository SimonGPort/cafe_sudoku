import styled from 'styled-components';
import color from '../../util/color';

export const Container=styled.div`
font-size:large;
align-items:center;
position: absolute;
top: 30%;  
left: 50%; 
transform: translate(-50%, -50%);
background-color:${color.LoginModalBackground};
border-radius:15px 15px 15px 15px;
width:25rem;
padding:1rem;
border:black 3px solid;
margin-top: 1em;
`;

export const Section=styled.div`
margin-bottom:1rem;
`;

export const SectionTitle=styled.div`
margin-bottom:2rem;
font-size:xx-large;
`;

export const SectionButton=styled.div`
display:inline-block;
cursor:pointer;
&:hover{
    color:${color.textHover}
}
`;

export const Input=styled.input`
width:80%;
height:2rem;
margin-top:0.1rem;
padding-left:0.5rem;
border:0.15rem solid black;
border-radius:10px 10px 10px 10px;
`;

export const Button=styled.button`
background-color:${color.signInBackground};
color:${color.signInColor};
font-size:large;
padding:0.5rem;
cursor:pointer;
`;

export const ErrorMessage=styled.h4`
color:${color.errorMessage}
`;