import React, { useMemo } from 'react';
import { useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import ProductCard from '../../components/ProductCard';

import DataService from "../../services/products.service";
import formatCurrency from '../../utils/formatCurrency';

import { 
    Container, 
    Content
} from './styles';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IProduct {
    id: number
    name: string,
    price: string,
    packaging: string,
    quantity: number,        
}

interface IUsers {
    id: number
    name: string,
    pass: string,        
}



const List: React.FC<IRouteParams> = ({match}) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [users, setUsers] = useState<IUsers[]>([]);

    const getAllProducts = async () => {
        const result = await DataService.getAllProducts();
        setProducts(result.data);
    };

    const getAllUsers = async () => {
        const result = await DataService.getAllUsers();
        setUsers(result.data);
    };
    

    const {type} = match.params;

    const pageData = useMemo(() => {
        return type === 'products' ? 
        {
            title: 'Produtos',
            data: getAllProducts()

        }
        :
        {
            title: 'Usuários',
            data: getAllUsers()
        }
         
    },[type]);
  

    return (
        <Container>
            <ContentHeader title={pageData.title}>            
            </ContentHeader>

            <Content>
                {products.map(item =>(
                    <ProductCard 
                    key={item.id} 
                    name={item.name} 
                    price={formatCurrency(Number(item.price))} 
                    packaging={item.packaging} 
                    quantity={item.quantity}/>
                ))}
                
            </Content>
            
        </Container>
    );
}

export default List;