import React from 'react';
import {Container,Section,SectionTitle,SectionButton,Input,Button} from './style';
import text from '../../util/text';
import {useNavigate} from 'react-router-dom';

const LoginModal : React.FC=()=>{
    const navigate = useNavigate();
    return(
        <Container>
            <SectionTitle>{text.header.en}</SectionTitle>
            <Section>
                <div>{text.name.en}</div>
                <div><Input/></div>
            </Section>

            <Section>
                <div>{text.password.en}</div>
                <div><Input/></div>
            </Section>

            <Section>
                <Button>{text.signIn.en}</Button>
            </Section>
            <Section>
                <SectionButton onClick={()=>{navigate('/register');}}>
                    {text.createAccount.en}
                </SectionButton>
            </Section>
            <Section>
                <SectionButton onClick={()=>{navigate('/main');}}>
                    {text.loginAsAGuest.en}
                </SectionButton>
            </Section>
        </Container>
    );
};

export default LoginModal;