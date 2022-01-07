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
    onpress: any;
}

const ProductCard: React.FC<IProductCardProps> = ({
    name,
    price,
    packaging,
    quantity,
    onpress,
}) => (
    
    <Container>
        {/* <Tag color={tagColor} /> */}
        <ContainerInfor>
            <span>{name}</span>
            <small>{packaging}</small>
            <small>Quantidade: {quantity}</small>
            <h3>Preço: {price}</h3>
        </ContainerInfor>
        <ActionButtons>
            <button onClick={onpress}><FaRegEdit fill='#ce9909'/></button>
            <button><FaTrashAlt fill='#ec3131'/></button>
        </ActionButtons>      
    </Container>
);


export default ProductCard;