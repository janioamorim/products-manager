import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
    display: flex;    
    justify-content: center;    
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    
    background: linear-gradient(42deg, rgba(1,47,75,1) 0%, rgba(0,126,201,1) 100%);
    padding: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;

`;

export const InputField = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 5px 0;
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
`;


