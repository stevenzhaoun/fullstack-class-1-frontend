import { useState, useEffect } from "react"
import { getUsers } from "../../api/user.api"
import { User } from "../../types"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ListUsers() {
    const [users, setUsers] = useState<User[]>([])

    const navigate = useNavigate()

    const fetchData = async () => {
        const usersData = await getUsers()
        setUsers(usersData)
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'roleId', headerName: 'Role', width: 150 },
    ];

    useEffect(() => {
        fetchData()
    }, [])

    return <div>
        <Box display="flex" justifyContent="space-between" my={3}>
            <Typography variant="h4">Users</Typography>
            <Button variant="contained" onClick={() => navigate('/users/add')}>Add User</Button>
        </Box>
        <Box sx={{ width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                disableRowSelectionOnClick
                onRowClick={data => navigate(`/users/${data.id}`)}
            />
        </Box>
    </div>
}