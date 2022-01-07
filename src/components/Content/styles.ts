import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    color: #FFF;
    background-color: #161E24;
    padding: 25px;  

    height: calc(100vh - 70px); 
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #235d87;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: #1C2A23;
    }

`;
