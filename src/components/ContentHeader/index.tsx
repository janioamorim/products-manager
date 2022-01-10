import React from 'react';

import { 
    Container,
    TitleContainer,
    LinkNovo
}  from './styles';

import {
    FaPlus
} from 'react-icons/fa';

interface IContentHeaderProps {
    title: string;    
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title
}) => (
    <Container>
        <TitleContainer>
            <h1>{title}</h1>                        
        </TitleContainer>
        {title === "Produtos" ? <LinkNovo href='/newregister'><FaPlus/>NOVO</LinkNovo> : null}

    </Container>
);


export default ContentHeader;