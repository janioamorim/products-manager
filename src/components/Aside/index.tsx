import React from 'react';

import logoImg from '../../assets/logo.svg';

import {
    ImHome,
    ImUsers,
    ImExit,
    ImCart
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
                    Início
                </MenuItemLink>

                <MenuItemLink href="/list/products">
                    <ImCart />
                    Produtos
                </MenuItemLink>

                <MenuItemLink href="/list/users">
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