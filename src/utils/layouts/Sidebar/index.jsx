import React from "react"
import Navbar from "../Navbar"
import DrawerSidebar from "../../../components/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import { ListItemText, ListItemIcon } from "@mui/material"
import { Home, Info } from '@mui/icons-material'
import { Link } from "@reach/router"

const SiderLayout = (props) => {
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }


    return(
        <>
            <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
            <DrawerSidebar open={open} handleDrawerClose={handleDrawerClose}>
                <List>
                    <ListItem button component={Link} to="/">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>

                    <ListItem button component={Link} to="dashboard">
                        <ListItemIcon>
                            <Info />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </List>
            </DrawerSidebar>
        </>

    )
}

export default SiderLayout