import styled, { css } from 'styled-components';

interface IContainerProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;  
    padding-left: 20px;
    position: relative;
    color: #FFF;
    background-color: #1C2A34;
    padding-left: 20px;
    border-right: 1px solid #CCC;
    position: relative;

    @media(max-width: 600px){
        padding-left: 15px;
        width: 200px;
        position: fixed;
        z-index: 2;
        background-color: #1c2a34fc;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid #CCC;
        `};
    }

`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;

`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;

    @media(max-width: 600px){        
        display: none;
    }
`;

export const Title = styled.h3`
    color: #FFF;
    margin-left: 10px;

    @media(max-width: 600px){
        display: none;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    color: #FFF;
    text-decoration: none;

    margin: 15px 0;
    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 20px;
        margin-right: 10px;
    }
`;



export const MenuItemButton = styled.button`
    font-size: 16px;
    color: #FFF;
    
    border: none;
    background: none;

    margin: 15px 0;
    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 20px;
        margin-right: 10px;
    }
`;
export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;

    border-radius: 5px;
    font-size: 22px;
    
    background-color: #d5591e;
    color: #FFF;

    transition: opacity .3s;

    &:hover{
        opacity: 0.7;
    }

    display: none;

    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
