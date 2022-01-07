import React from "react";
import ContentHeader from "../../components/ContentHeader";
import { 
    Container,
    Content,
    Form,
    InputField,
    Label,
    InputText
} from './styles';


const FormProduct: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Cadastrar - Produto" />
            <Content>
                <Form>
                    <InputField >
                        <Label>Nome</Label>
                        <InputText type="text" name="Nome" />                       
                    </InputField>
                    <InputField >
                        <Label>Embalagem</Label>
                        <InputText type="number" name="title" />                       
                    </InputField>
                    <InputField >
                        <Label>Preço</Label>
                        <InputText type="number" name="title" />                       
                    </InputField>
                    <InputField >
                        <Label>Quantidade</Label>
                        <InputText type="number" name="title" />                       
                    </InputField>
                </Form>
            </Content>
        </Container>
    )
}

export default FormProduct;