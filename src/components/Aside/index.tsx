import React, { useState } from 'react';

import logoImg from '../../assets/logo.svg';

import { useAuth } from '../../providers/auth';

import {
    ImHome,
    ImUsers,
    ImExit,
    ImCart,
    ImCross,
    ImMenu
} from 'react-icons/im';

import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    ToggleMenu,
}  from './styles';

const Aside: React.FC = () => {
    const [toggleMenuIsOpened, setToggleMenuIsOpened ] = useState(false);
    const { signOut } = useAuth();
    
    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }
    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    { toggleMenuIsOpened ? <ImCross /> : <ImMenu /> }
                </ToggleMenu>
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

                <MenuItemButton onClick={signOut}>
                    <ImExit />
                    Sair
                </MenuItemButton>
            </MenuContainer>
        </Container>
    );
}

export default Aside;