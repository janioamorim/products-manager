import React, { useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import ProductCard from '../../components/ProductCard';

import DataService from "../../services/products.service";
import { useHistory } from 'react-router-dom';

import { 
    Container, 
    Content
} from './styles';
import { ModalAlert } from '../../components/ModalAlert';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
        
    },
    setModal: any;
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



const List: React.FC<IRouteParams> = ({match, setModal}) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [users, setUsers] = useState<IUsers[]>([]);
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const [idProduct, setIdProduct] = useState<number>(0);

    const getAllProducts = async () => {
        const result = await DataService.getAllProducts();
        setProducts(result.data);
    };

    const getAllUsers = async () => {
        const result = await DataService.getAllUsers();
        setUsers(result.data);
    };
    

    const {type} = match.params;

    const openModal = (id: number) => {
        setShowModal(true);
        setIdProduct(id)              

    }

    const deleteProduct = async () => {
        const result = await DataService.deleteProduct(idProduct);
        getAllProducts();
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
            {showModal ? 
                <ModalAlert setShowModal={setShowModal} deleteProduct={()=>deleteProduct()}/>
                :
                null
            }
        </Container>
    );
}

export default List;