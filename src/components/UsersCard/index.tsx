import React from 'react';


import {   
    FaTrashAlt,
    FaUserTie
} from 'react-icons/fa';

import { 
    Container, 
    ActionButtons,
    ContainerInfor,
    ColumnLeft
}  from './styles';

interface IUsers {
    id: number
    name: string,
    user: string,
    pass: string,      
}

interface IUserCardProps {
    data: IUsers;
    onpressDelete: any;    
}



const UsersCard: React.FC<IUserCardProps> = ({
    data,
    onpressDelete
}) => (
    
    <Container>
        <ColumnLeft>
            <FaUserTie />
            <ContainerInfor>
                <span>Nome: {data.name}</span>
                <small>Usuário: {data.user}</small>            
                <small>Codigo: {data.id}</small>
            </ContainerInfor>
        </ColumnLeft>
        <ActionButtons>            
            <button onClick={onpressDelete}><FaTrashAlt fill='#ec3131'/></button>
        </ActionButtons>      
    </Container>
);


export default UsersCard;