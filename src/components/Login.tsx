import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { loginApi } from "../api/login.api";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { setUserData } = useAuth()


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const userData = await loginApi(email, password)
        setUserData(userData)
        navigate('/')
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }


    return <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" height="80vh">
        <Typography variant="h3">Welcome</Typography>
        <Box component="form" width={400}>
            <Box>
                <TextField value={email} onChange={handleEmailChange} label="email" margin="normal" fullWidth required type="email" />
            </Box>
            <Box>
                <TextField value={password} onChange={e => setPassword(e.target.value)} label="password" margin="normal" fullWidth required type="password" />
            </Box>
            <Box my={3}>
                <Button type="submit" variant="contained" fullWidth onClick={handleSubmit}>Login</Button>
            </Box>
        </Box>
    </Box>
}