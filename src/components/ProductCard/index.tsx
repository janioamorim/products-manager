import React, { HtmlHTMLAttributes } from 'react';


import {
    FaRegEdit,
    FaTrashAlt
} from 'react-icons/fa';

import { 
    Container, 
    ActionButtons,
    ContainerInfor
}  from './styles';

interface IProductCardProps {
    name: string;
    price: string;
    packaging: string;
    quantity: number;
    onpressEdit: any;
    onpressDelete: any;
}

const ProductCard: React.FC<IProductCardProps> = ({
    name,
    price,
    packaging,
    quantity,
    onpressEdit,
    onpressDelete
}) => (
    
    <Container>
        {/* <Tag color={tagColor} /> */}
        <ContainerInfor>
            <span>{name}</span>
            <small>{packaging}</small>
            <small>Quantidade: {quantity}</small>
            <h3>Preço: R$ {price}</h3>
        </ContainerInfor>
        <ActionButtons>
            <button onClick={onpressEdit}><FaRegEdit fill='#ce9909'/></button>
            <button onClick={onpressDelete}><FaTrashAlt fill='#ec3131'/></button>
        </ActionButtons>      
    </Container>
);


export default ProductCard;