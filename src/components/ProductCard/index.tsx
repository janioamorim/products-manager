import React from 'react';

import { Container }  from './styles';

interface IProductCardProps {
    name: string;
    price: string;
    packaging: string;
    quantity: number;
}

const ProductCard: React.FC<IProductCardProps> = ({
    name,
    price,
    packaging,
    quantity
}) => (
    <Container>
        {/* <Tag color={tagColor} /> */}
        <div>
            <span>{name}</span>
            <small>{packaging}</small>
            <small>Quantidade: {quantity}</small>
        </div>        
        <h3>{price}</h3>
    </Container>
);


export default ProductCard;