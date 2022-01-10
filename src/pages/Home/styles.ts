import styled from 'styled-components';

export const Container = styled.div`    
    svg{
        width: 90px;
        height: 90px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    a{
        margin: 10px 0 10px 0;
    }

    @media(max-width: 600px){
        flex-direction: column;       
    }
`;

export const NameOption = styled.span`
   font-size: 18px;
   color: #FFF;
   padding: 15px;
`;
export const Link = styled.a`
   text-decoration: none;
    width: 47%;
    margin: 7px 0;
    padding: 10px;
   
    transition: opacity .3s;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover{
        opacity: .7;
    }

    @media(max-width: 600px){
        width: 100%;      
    }
`;
