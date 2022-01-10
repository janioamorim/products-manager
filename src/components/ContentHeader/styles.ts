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
        font-size: 30px;

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
    background-color: #0484cf;
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

    @media(max-width: 600px){
        width: 125px;
    }
`;
