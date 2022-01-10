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


export const Container = styled.div``;

export const Content = styled.div`
    display: flex;    
    justify-content: center;
    transition: all .3s;
   
   animation: ${animate} .9s ease;  
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    
    background: linear-gradient(42deg, rgba(1,47,75,1) 0%, rgba(0,126,201,1) 100%);
    padding: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;

    @media(max-width: 600px){        
        width: 100%;
    }

`;

export const InputField = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 5px 0;
    span{
        font-size: 18px;
        color: #f91a1a;
        font-style: italic;
        margin: 7px 0 0 5px;
    }
`;
export const Label = styled.label`
    font-size: 15px;
    margin-bottom: 10px;
`;
export const InputText = styled.input`
    background-color: #FFF;
    border-radius: 20px;
    padding: 20px;
    height: 50px;
    color: #424242;
    font-size: 18px;
`;
export const InputSelect = styled.select`
    background-color: #FFF;
    border-radius: 20px;
    padding: 10px;
    height: 50px;
    color: #424242;
    font-size: 18px;

    -webkit-appearance: none;
    -moz-appearance: none;
`;
export const ButtonSubmit = styled.button`
    background-color: #073a50;
    border-radius: 20px;
    border: 2px solid #fff;
    padding: 15px;
    margin-top: 15px;
    color: #FFF;
    font-size: 20px;
    font-weight: 500;

    &:hover {
        opacity: .7;        
    }
    
`;



