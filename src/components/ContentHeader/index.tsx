import React from 'react';

import { 
    Container,
    TitleContainer, 
}  from './styles';

interface IContentHeaderProps {
    title: string;    
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title
}) => (
    <Container>
        <TitleContainer>
            <h1>{title}</h1>
            {title === "Produtos" ? <a href='/newregister'>Novo</a> : null}            
        </TitleContainer>
    </Container>
);


export default ContentHeader;