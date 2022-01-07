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

export const Container = styled.li`
    background-color: #235d87;

    list-style: none;
    border-radius: 10px;
    margin: 10px 0;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    transition: all .3s;
    position: relative;

    animation: ${animate} .5s ease;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }


    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;    

        padding-left: 10px;    
    }

    > div span {
        font-size: 22px;
        font-weight: 500;
    }
    > h3{
        margin-right: 20px;
    } 

    
`;
