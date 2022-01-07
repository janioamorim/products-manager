import React, { ChangeEvent, useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import { useHistory, useParams } from 'react-router-dom';

import { 
    Container,
    Content,
    Form,
    InputField,
    Label,
    InputText,
    InputSelect,
    ButtonSubmit
} from './styles';

import DataService from "../../services/products.service";

interface IModelProduct {
    name: string;
    price: string;
    packaging: string;
    quantity: number;

}

const FormProduct: React.FC = () => {
    const history = useHistory()
    const {id} = useParams<{id:string}>();
    const [modelProduct, setModelProduct] = useState<IModelProduct>({
        name: '',
        price: '',
        packaging: '',
        quantity: 0
    });
    function updateModel (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>){                
        setModelProduct({
            ...modelProduct,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        
        if(id !== undefined){
            const resultEdit = await DataService.editProduct(id, modelProduct);            
        }else{
            const resultPost = await DataService.postProduct(modelProduct);
        }
       history.goBack();
      
    }

    async function findProduct(id:string){        
        const result = await DataService.findProduct(id);
        setModelProduct(result.data);      
       
    }

    useEffect(()=>{
        if(id !== undefined){
            findProduct(id)
        }
    },[id])

    return (
        <Container>
            <ContentHeader title="Cadastrar - Produto" />
            <Content>
                <Form onSubmit={onSubmit}>
                    <InputField >
                        <Label>Nome</Label>
                        <InputText 
                        type="text" 
                        name="name" 
                        value={modelProduct.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>)=> updateModel(e)}/>
                    </InputField>
                    <InputField >
                        <Label>Embalagem</Label>
                        <InputSelect 
                            name="packaging"
                            value={modelProduct.packaging}
                            onChange={(e: ChangeEvent<HTMLSelectElement>)=> updateModel(e)} >
                            <option value="Caixa">Caixa</option>
                            <option value="Pacote">Pacote</option>
                            <option value="Vidro">Vidro</option>
                            <option value="Saco">Saco</option>                            
                        </InputSelect>                        
                    </InputField>
                    <InputField >
                        <Label>Preço</Label>
                        <InputText 
                            type="number" 
                            name="price"
                            value={modelProduct.price}
                            onChange={(e: ChangeEvent<HTMLInputElement>)=> updateModel(e)}/>                       
                    </InputField>
                    <InputField >
                        <Label>Quantidade</Label>
                        <InputText 
                            type="number" 
                            name="quantity"
                            value={modelProduct.quantity}
                            onChange={(e: ChangeEvent<HTMLInputElement>)=> updateModel(e)}/>                       
                    </InputField>
                    <ButtonSubmit type="submit">Salvar</ButtonSubmit>
                </Form>
            </Content>
        </Container>
    )
}

export default FormProduct;