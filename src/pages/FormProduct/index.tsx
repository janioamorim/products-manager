import React, { ChangeEvent, useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import formatCurrency from '../../utils/formatCurrency';

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
    errors: string

}

const FormProduct: React.FC = () => {
    const history = useHistory()
    const {id} = useParams<{id:string}>();
    const [modelProduct, setModelProduct] = useState<IModelProduct>({
        name: '',
        price: '',
        packaging: '',
        quantity: 0,
        errors: ''
    });

    const {register, handleSubmit,formState: { errors }  } = useForm<IModelProduct>()
    
    function updateModel (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>){                
        setModelProduct({
            ...modelProduct,
            [e.target.name]: e.target.value
        })
    }

    async function saveProduct(data: IModelProduct){        
        if(id !== undefined){
            const resultEdit = await DataService.editProduct(id, data);            
        }else{
            const resultPost = await DataService.postProduct(data);
        }
       history.push('/list/products');      
    }

    async function findProduct(id:string){        
        const result = await DataService.findProduct(id);
        setModelProduct(result.data);      
       
    }

    useEffect(()=>{
        if(id !== undefined){
            findProduct(id)
        }
    },[id]);

    const onSubmit = handleSubmit((data) => {
        saveProduct(data)
    });

    return (
        <Container>
            <ContentHeader title="Cadastrar - Produto" />
            <Content>
                <Form onSubmit={onSubmit}>
                    <InputField >
                        <Label>Nome</Label>
                        <InputText 
                        type="text" 
                        
                        value={modelProduct.name}
                        {...register('name', { required: true })}
                        onChange={(e: ChangeEvent<HTMLInputElement>)=> updateModel(e)}/>
                        {errors?.name && <span>*Nome Obrigatório</span>}
                    </InputField>
                    <InputField >
                        <Label>Embalagem</Label>
                        <InputSelect                            
                            {...register("packaging", { required: true })}
                            value={modelProduct.packaging}
                            onChange={(e: ChangeEvent<HTMLSelectElement>)=> updateModel(e)} >
                            <option value="">Escolha uma opção</option>
                            <option value="Caixa">Caixa</option>
                            <option value="Pacote">Pacote</option>
                            <option value="Vidro">Vidro</option>
                            <option value="Saco">Saco</option>                            
                        </InputSelect>
                        {errors?.packaging && <span>*Esolha uma opção</span>}                      
                    </InputField>
                    <InputField >
                        <Label>Preço</Label>
                        <InputText 
                            type="text"
                            {...register("price", { required: true })}
                            value={formatCurrency(modelProduct.price)}
                            onChange={(e: ChangeEvent<HTMLInputElement>)=> updateModel(e)}/>
                            {errors?.price && <span>*Preço obrigatório</span>}                 
                    </InputField>
                    <InputField >
                        <Label>Quantidade</Label>
                        <InputText 
                            type="text"   
                            {...register("quantity", { required: true })}
                            value={modelProduct.quantity}
                            onChange={(e: ChangeEvent<HTMLInputElement>)=> updateModel(e)}/>
                            {errors?.quantity && <span>*Quantidade obrigatória</span>}                   
                    </InputField>
                    <ButtonSubmit type="submit">Salvar</ButtonSubmit>
                </Form>
            </Content>
        </Container>
    )
}

export default FormProduct;