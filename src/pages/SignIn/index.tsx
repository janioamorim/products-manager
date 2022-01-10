import React, {useState} from 'react';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../providers/auth';

import {
    Container,
    Logo,
    Form,
    FormTitle,
} from './styles';

const SignIn: React.FC = () => {
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');    

    const { signIn } = useAuth();

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Products Manager</h2>
            </Logo>

            <Form onSubmit={() => signIn(user, password)}>
                <FormTitle>Entrar</FormTitle>

                <Input 
                    type="text"
                    placeholder="Usuário"
                    required
                    onChange={(e) => setUser(e.target.value)}
                />
                <Input 
                    type="password"
                    placeholder="Senha"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    
                />

               <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}

export default SignIn;