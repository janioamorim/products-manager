import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;  
    padding-left: 20px;
    position: relative;
    color: #FFF;
    background-color: #1C2A34;
    padding-left: 20px;
    border-right: 1px solid #CCC;
    position: relative;

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
