import styled from 'styled-components';

export const Container=styled.div`
width:12rem;
height:12rem;
border-style:solid;
border-color:black;
border-top-width:${props=>(props.borderOutline[0]?'0.2rem':'0rem')};
border-right-width:${props=>(props.borderOutline[1]?'0.2rem':'0rem')};
border-bottom-width:${props=>(props.borderOutline[2]?'0.2rem':'0rem')};
border-left-width:${props=>(props.borderOutline[3]?'0.2rem':'0rem')};
box-sizing: border-box;
`;

export const SudokuRow=styled.div`
display:flex;
`;