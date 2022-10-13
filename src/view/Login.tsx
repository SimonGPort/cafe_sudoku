import React, {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import LoginModal from '../components/LoginModal/LoginModal';
import {getTicket} from '../util/localStorage';
import {AUTOLOGIN} from '../graphQL/Queries';
import { useQuery } from '@apollo/client';
import {login} from '../redux/actions/login';
import { useDispatch } from 'react-redux';

const Login : React.FC=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [id,setId]=useState('');
    // eslint-disable-next-line
    const {error,loading,data}=useQuery(AUTOLOGIN,{variables:{id}});

    useEffect(()=>{
        if(data && data.autoLogin.success.result){
            dispatch(login(data.autoLogin.user.name,data.autoLogin.user.score));
            navigate('/main');
        }
    },[data]);

    useEffect(()=>{autoLogin();},[]);

    const autoLogin=()=>{
        const ticket=getTicket();
        console.log('ticket:',ticket);
        if(ticket){
            setId(ticket);
        }
    };

    return(
        <LoginModal/>
    );
};

export default Login;
