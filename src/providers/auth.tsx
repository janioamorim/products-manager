import React, { createContext, useState, useContext } from 'react';
import { usersService } from '../services/user.service';

interface IAuthContext {
    logged: boolean;
    signIn(user: string, pass: string): void;
    signOut(): void;    
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@product-manager:logged'); 

        return !!isLogged;
    });

    const [user, setUser] = useState<string>();

    const getUser = async (user:string, pass:string) => {
        const result = await usersService.getUser(user, pass);    
        setUser(result.data.name);
        return result.data;
        
    };

    

    const signIn  = async (user: string, pass: string) => {        
        const result = await getUser(user, pass);        
        if(result.length > 0){
            localStorage.setItem('@product-manager:logged', 'true');
            localStorage.setItem('@name-user', result[0].name);
            setLogged(true);
        }else{
            alert('Senha ou usuário inválidos!');
        }
    }

    const signOut = () => {
        localStorage.clear();
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };