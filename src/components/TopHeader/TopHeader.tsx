import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {state} from '../../interface/state';
import {useNavigate} from 'react-router-dom';
import {logoutTicket} from '../../util/localStorage';
import {logout} from '../../redux/actions/logout';
import {Container,ButtonContainer,Button} from './style';



const SudokuView : React.FC=()=>{

    const navigate = useNavigate();
    const name=useSelector((state:state) => state.name);
    const dispatch = useDispatch();

    const toogleLogout=()=>{
        logoutTicket();
        dispatch(logout());
        navigate('/');
    };

    return(<>
        <Container>
            <div>
                <Button  onClick={()=>{console.log('solution');}}>
                    <img src="auto-fix-black.png"/>
                </Button>
                <Button  onClick={()=>{console.log('reset');}}>
                    <img src="autorenew-black.png"/>
                </Button>
            </div>
            <ButtonContainer>
                <h4>{name}</h4><Button  onClick={()=>{toogleLogout();}}>
                    <img src="logout.png"/>
                </Button>
            </ButtonContainer>
        </Container>
    </>
    );
};

export default SudokuView;
