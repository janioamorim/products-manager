import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;


export const Container = styled.button`
    width: 100%;
    margin: 7px 0;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    color: #FFF;
    background-color: #073a50;
    border: 2px solid #fff;
    transition: opacity .3s;
    display: flex;
    flex-direction: column;
    align-items: center;

    animation: ${animate} .5s ease;

    &:hover{
        opacity: .7;
    }
`;
