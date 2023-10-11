import { Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUser } from "../../api/user.api"
import { User } from "../../types"

export default function UserDetail() {
    const [userData, setUserData] = useState<Partial<User>>({})

    const params = useParams()
    const isAdd = params.id === 'add'

    const userId = params.id as string

    const fetchData = async () => {
        const data = await getUser(userId)
        setUserData(data)
    }

    useEffect(() => {
        if (!isAdd) {
            fetchData()
        }
    }, [])

    const handleChange = (field: string, value: string) => {
        setUserData({
            ...userData,
            [field]: value
        })
    }

    return <Box>
        <Typography variant="h5">User</Typography>
        <Box component="form" width={500} my={3}>

            <Box my={3}>
                <TextField label="Name" margin="normal" fullWidth required value={userData.name || ''} onChange={(e) => handleChange('name', e.target.value)} />
            </Box>
            <Box my={3}>
                <TextField label="Email" type="email" fullWidth required value={userData.email || ''} onChange={(e) => handleChange('email', e.target.value)}/>
            </Box>
            <Box my={3}>
                <Button variant="contained">{isAdd ? 'Create' : 'Update'}</Button>
            </Box>
        </Box>
    </Box>
}