import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #161E24;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 30px;

    > h2 {
        color: #FFF; 
        margin-left: 7px;
    }

    > img {
        width: 40px;
        height: 40px;
    }
`;

export const Form = styled.form`
    width: 400px;
    height: 300px;
    padding: 30px;
    border-radius: 10px;
    background: linear-gradient(42deg, rgba(1,47,75,1) 0%, rgba(0,126,201,1) 100%);

    @media(max-width: 600px){        
        width: 90%;
    }
`;

export const FormTitle = styled.h1`
    margin-bottom: 30px;

    color: #FFF; 

    &:after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid #F7931B;  
    }
`;

