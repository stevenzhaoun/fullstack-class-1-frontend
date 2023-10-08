import { Box, Toolbar } from '@mui/material'
import NavBar from './Navbar'
import SideNav from './SideNav'
export default function Layout() {
    return (
        <Box position="relative">
            <Box position="absolute" zIndex={1} width={"100%"}>
                <NavBar />
            </Box>
            <Box position="absolute" zIndex={0} display="flex">
                <SideNav />
                <Box sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Box>
                        Content
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}