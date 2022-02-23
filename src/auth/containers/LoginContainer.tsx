import * as React from 'react';
import Box from '@mui/material/Box';
import { login, test } from '../../services/authService';
import { useRouter } from 'next/dist/client/router';
import LoginComponent from '../components/LoginComponent';

export const LoginContainer: React.FC = () => {
    const router = useRouter();
    const onClick = async (email: string, password: string) => {
        console.log(email, password);
        const response = await login(email, password);
        console.log(response);
         if (response?.data) {
             router.push('/');
             alert('Correcto!');
         } else {
             alert('Incorrecto!');
         }
    };

    const onRegister = () => {
        router.push('/register');
    }

    return (
        <Box>
            <LoginComponent onClick={onClick} onRegister={onRegister} />
        </Box>
    );
}
export default LoginContainer;