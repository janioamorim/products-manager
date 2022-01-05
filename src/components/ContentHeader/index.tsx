import React from 'react';

import { 
    Container,
    TitleContainer, 
}  from './styles';

interface IContentHeaderProps {
    title: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title, children
}) => (
    <Container>
        <TitleContainer>
            <h1>{title}</h1>                
        </TitleContainer>
    </Container>
);


export default ContentHeader;