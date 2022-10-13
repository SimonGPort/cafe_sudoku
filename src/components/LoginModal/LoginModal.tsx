import React, {useState} from 'react';
import {Container,Section,SectionTitle,SectionButton,Input,Button,ErrorMessage} from './style';
import text from '../../util/text';
import {useNavigate} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {LOGIN} from '../../graphQL/Queries';
import { useDispatch } from 'react-redux';
import {login} from '../../redux/actions/login';
import { loginTicket } from '../../util/localStorage';

const LoginModal : React.FC=()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    // eslint-disable-next-line
    const {error,loading,data}=useQuery(LOGIN,{variables:{name,password}});
    const [errorMessage,setErrorMessage]=useState('');

    const signup=()=>{
        if(data.login.success.result===true){
            dispatch(login(data.login.user.name,data.login.user.score));
            loginTicket(data.login.user.id);
            navigate('/main');
        }else{
            setErrorMessage(text.wrongUser.en);
        }
    };

    return(
        <Container>
            <SectionTitle>{text.header.en}</SectionTitle>
            <Section>
                <div>{text.name.en}</div>
                <div><Input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setName(e.target.value);}}/></div>
            </Section>

            <Section>
                <div>{text.password.en}</div>
                <div><Input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPassword(e.target.value);}}/></div>
            </Section>
            {errorMessage!=='' &&
                <ErrorMessage>{errorMessage}</ErrorMessage>
            }
            <Section>
                <Button onClick={()=>{signup();}}>{text.signIn.en}</Button>
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