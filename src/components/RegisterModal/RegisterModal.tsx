import React,{useEffect, useState} from 'react';
import {Container,Section,SectionTitle,SectionButton,Input,Button} from './style';
import text from '../../util/text';
import {useNavigate} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {CREATEUSER} from '../../graphQL/Mutations';
import { useDispatch } from 'react-redux';
import {login} from '../../redux/actions/login';
import { loginTicket } from '../../util/localStorage';

const RegisterModal : React.FC=()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [createUser,{data,error}]=useMutation(CREATEUSER);

    const [name,setName]=useState('');
    const [password,setPassword]=useState('');

    const toogleCreateUser=()=>{
        createUser({
            variables:{
                name,password
            }
        });
        if(error){
            console.log('error createUser:',error);
        }
    };

    useEffect(()=>{
        if(data && data.createUser.success.result){
            dispatch(login(data.createUser.user.name,data.createUser.user.score));
            loginTicket(data.createUser.user.id);
            navigate('/main');
        }
    },[data]);

    return(
        <Container>
            <SectionTitle>{text.createAccount.en}</SectionTitle>
            <Section>
                <div>{text.name.en}</div>
                <div><Input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setName(e.target.value);}}/></div>
            </Section>

            <Section>
                <div>{text.password.en}</div>
                <div><Input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPassword(e.target.value);}}/></div>
            </Section>

            <Section>
                <Button onClick={()=>{toogleCreateUser();}}>{text.create.en}</Button>
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