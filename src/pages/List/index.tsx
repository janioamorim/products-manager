import React, { useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import ProductCard from '../../components/ProductCard';

import {productService} from "../../services/products.service";
import { useHistory } from 'react-router-dom';

import { 
    Container, 
    Content
} from './styles';
import { ModalAlert } from '../../components/ModalAlert';
import { usersService } from '../../services/user.service';
import UsersCard from '../../components/UsersCard';
import { IProduct, IUsers } from '../../interfaces/interfaces.types';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
        
    },
    setModal: any;
}


const List: React.FC<IRouteParams> = ({match, setModal}) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [users, setUsers] = useState<IUsers[]>([]);
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const [idRegister, setIdRegister] = useState<number>(0);

    const getAllProducts = async () => {
        const result = await productService.getAllProducts();
        setProducts(result.data);       
        
    };

    const getAllUsers = async () => {
        const result = await usersService.getAllUsers();
        setUsers(result.data);        
    };
    

    const {type} = match.params;

    const openModal = (id: number) => {
        setShowModal(true);
        setIdRegister(id)              

    }

    const deleteItem = async () => {
        if(type === 'products'){
            await productService.deleteProduct(idRegister);
            getAllProducts();
        }else{
            await usersService.deleteUser(idRegister);
            getAllUsers();
        }
        setShowModal(false);

    }

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

    function editProduct (id: number){
        history.push(`/editproduct/${id}`)
    }
    

    return (
        <Container>
            <ContentHeader title={pageData.title}/>           
            {type === 'products' ? 
            <Content>
                {products.map(item =>(
                    <ProductCard 
                    key={item.id} 
                    name={item.name} 
                    price={item.price} 
                    packaging={item.packaging} 
                    quantity={item.quantity}
                    onpressEdit={()=>editProduct(item.id)}
                    onpressDelete={()=>openModal(item.id)}/>
                ))}                
            </Content>
            :
            <Content>
                {users.map(item =>(
                        <UsersCard key={item.id} data={item} onpressDelete={()=>openModal(item.id)}/>
                    ))}                
            </Content>            
        }

            {showModal ? 
                <ModalAlert setShowModal={setShowModal} deleteProduct={()=>deleteItem()}/>
                :
                null
            }
        </Container>
    );
}

export default List;