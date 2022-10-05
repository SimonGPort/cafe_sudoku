import React from 'react';
import {Container,Section,SectionTitle,SectionButton,Input,Button} from './style';
import text from '../../util/text';
import {useNavigate} from 'react-router-dom';

const RegisterModal : React.FC=()=>{
    const navigate = useNavigate();
    return(
        <Container>
            <SectionTitle>{text.createAccount.en}</SectionTitle>
            <Section>
                <div>{text.name.en}</div>
                <div><Input/></div>
            </Section>

            <Section>
                <div>{text.password.en}</div>
                <div><Input/></div>
            </Section>

            <Section>
                <Button>{text.create.en}</Button>
            </Section>
            <Section>
                <SectionButton onClick={()=>{navigate('/');}}>
                    {text.cancel.en}
                </SectionButton>
            </Section>
        </Container>
    );
};

export default RegisterModal;