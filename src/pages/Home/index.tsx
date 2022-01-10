import React from "react";
import ContentHeader from "../../components/ContentHeader";
import { 
    Container,
    NameOption,
    Content,
    Link
} from './styles';

import {
    FaUserTie,
    FaClipboardList
} from 'react-icons/fa';
import CardHome from "../../components/CardHome";


const Home: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Products Manager" />            
            <Content>
                <Link href="/list/products">
                    <CardHome>
                        <FaClipboardList/>
                        <NameOption>Produtos</NameOption>                      
                    </CardHome>                
                </Link>
                <Link href="/list/users">
                    <CardHome>
                        <FaUserTie/>
                        <NameOption>Usuários</NameOption>                      
                    </CardHome>                
                </Link>              
            </Content>
        </Container>
    )
}

export default Home;