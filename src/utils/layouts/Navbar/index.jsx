import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";

const Navbar = props => {
    return(
        <>
            <CssBaseline />
            <AppBar position="fixed" open={props.open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(props.open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        My App
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar