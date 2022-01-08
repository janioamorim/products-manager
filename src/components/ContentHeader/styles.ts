import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const TitleContainer = styled.div`

    > h1 {
        color: #FFF;

        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid #FFF;
        }
    }


`;

export const LinkNovo = styled.a`
    text-decoration: none;
    color: #FFF;
    background-color: #2a4c30;
    padding: 15px;
    width: 150px;
    text-align: center;
    font-weight: 500;
    &:hover {
        opacity: .7;       
    }   
    svg{
        margin-right: 15px;
    }
`;
