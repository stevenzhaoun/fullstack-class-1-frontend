import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useAppSelector } from '../hooks/useRedux';
import { selectUser } from '../slices/userSlice';
import useAuth from '../hooks/useAuth';
// props
export default function NavBar() {

    const userData = useAppSelector(selectUser)
    const { logout } = useAuth()
    const handleLogout = () => {
        logout()
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Business Management System
                    </Typography>
                    {userData?.name}
                    <Button color="inherit" onClick={handleLogout}>{userData ? 'Logout' : 'Login'}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}