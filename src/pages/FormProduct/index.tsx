import React, { ChangeEvent, useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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

import {productService} from "../../services";

interface IModelProduct {
    name: string;
    price: string;
    packaging: string;
    quantity: number;
    errors: string

}

const FormProduct: React.FC = () => {
    const history = useHistory()
    const {id} = useParams<{id:string}>();
    const isAddMode = !id;
    const [modelProduct, setModelProduct] = useState({
        name: '',
        price: '',
        packaging: '',
        quantity: 0,
        errors: ''
    });

    const onlyNumbers = /^\d+$/

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Nome obrigatório'),
        price: Yup.string()
            .required('Preço obrigatório'),
        packaging: Yup.string()
            .required('Embalagem obrigatória'),
        quantity: Yup.string()
            .matches(onlyNumbers, 'Apenas números')
            .required('Quantidade Obrigatória'),
        
    });

    const {register, handleSubmit, setValue,formState: { errors }  } = useForm({
        resolver: yupResolver(validationSchema)
    });

    
    function updateModel (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>){                
        setModelProduct({
            ...modelProduct,
            [e.target.name]: e.target.value
        })
    }

    async function saveProduct(data: IModelProduct){        
        if(isAddMode){
            await productService.postProduct(data);
        }else{
            await productService.editProduct(id, data);            
        }
       history.push('/list/products');      
    }

    async function findProduct(id:string){        
        const result = await productService.findProduct(id);
        const fields = ['name', 'price', 'packaging', 'quantity'];
        fields.forEach(field => setValue(field, result.data[field]));        
       
    }

    useEffect(()=>{
        if(id !== undefined){
            findProduct(id)
        }
    },[id]);


    async function onSubmit(data: IModelProduct) {
        saveProduct(data);        
    }
    

    return (
        <Container>
            <ContentHeader title={isAddMode ? 'Cadastrar Produto' : 'Editar Produto'}/>
            <Content>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputField >
                        <Label>Nome</Label>
                        <InputText 
                        type="text"                     
                        {...register('name')}/>
                        <span>{errors.name?.message}</span>
                    </InputField>
                    <InputField >
                        <Label>Embalagem</Label>
                        <InputSelect                            
                            {...register("packaging")}>
                            <option value="">Escolha uma opção</option>
                            <option value="Caixa">Caixa</option>
                            <option value="Pacote">Pacote</option>
                            <option value="Vidro">Vidro</option>
                            <option value="Saco">Saco</option>                            
                        </InputSelect>
                        <span>{errors.packaging?.message}</span>
                    </InputField>
                    <InputField >
                        <Label>Preço</Label>
                        <InputText 
                            type="text"
                            {...register("price")}/>
                            <span>{errors.price?.message}</span>
                    </InputField>
                    <InputField >
                        <Label>Quantidade</Label>
                        <InputText 
                            type="text"
                            {...register("quantity")}/>
                            <span>{errors.quantity?.message}</span>
                    </InputField>
                    <ButtonSubmit type="submit">Salvar</ButtonSubmit>
                </Form>
            </Content>
        </Container>
    )
}

export default FormProduct;