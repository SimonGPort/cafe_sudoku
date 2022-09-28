import styled from 'styled-components';

export const Container=styled.div`
position:relative;
display: flex;
align-items: center;
justify-content: center;
width:4rem;
height:4rem;
border-style:solid;
border-color:black;
border-top-width:${props=>(props.borderOutline[0]?'0.1rem':'0rem')};
border-right-width:${props=>(props.borderOutline[1]?'0.1rem':'0rem')};
border-bottom-width:${props=>(props.borderOutline[2]?'0.1rem':'0rem')};
border-left-width:${props=>(props.borderOutline[3]?'0.1rem':'0rem')};
box-sizing: border-box;
background-color:${props=>(props.lock?'#rgba(204,204,204,1)':'revert')};
`;