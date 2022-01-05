import React from 'react';
import { 
    Container, 
    Profile, 
    Welcome, 
    UserName, 
}  from './styles';

const MainHeader: React.FC = () => {

    return (
        <Container>           
            <Profile>
                <Welcome>Olá</Welcome>
                <UserName>Jânio Amorim</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;