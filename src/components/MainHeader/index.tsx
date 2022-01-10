import React from 'react';
import { useAuth } from '../../providers/auth';
import { 
    Container, 
    Profile, 
    Welcome, 
    UserName, 
}  from './styles';

const MainHeader: React.FC = () => {
    
    const nameUser = localStorage.getItem('@name-user'); 

    return (
        <Container>           
            <Profile>
                <Welcome>Olá</Welcome>
                <UserName>{nameUser}</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;