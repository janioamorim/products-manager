import React from 'react';

import logoImg from '../../assets/logo.svg';

import {
    ImHome,
    ImUsers,
    ImExit
} from 'react-icons/im';

import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
}  from './styles';

const Aside: React.FC = () => {

    return (
        <Container>
            <Header>

                <LogImg src={logoImg} alt="Logo" />
                <Title>Products Manager</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <ImHome />
                    Home
                </MenuItemLink>

                <MenuItemLink href="/list/entry-balance">
                    <ImUsers />
                    Usuários
                </MenuItemLink>                

                <MenuItemButton >
                    <ImExit />
                    Sair
                </MenuItemButton>
            </MenuContainer>
        </Container>
    );
}

export default Aside;