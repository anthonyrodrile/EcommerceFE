import * as React from 'react';
import Box from '@mui/material/Box';
import { login, test } from '../../services/authService';
import { useRouter } from 'next/dist/client/router';
import { RegisterComponent } from '../components/RegisterComponent';


export const RegisterContainer: React.FC = () => {
    const router = useRouter();
    const onClick = async (email: string, password: string) => {
        console.log(email, password);
        //const response = await register(email, password);

    };

    return (
        <Box>
            <RegisterComponent onClick={onClick} />
        </Box>
    );
}
export default RegisterContainer;