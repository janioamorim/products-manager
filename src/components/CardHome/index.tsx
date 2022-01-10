import React from 'react';

import { Container }  from './styles';


const CardHome: React.FC = ({children}) => (
    <Container>
        {children}      
    </Container>
);

export default CardHome;