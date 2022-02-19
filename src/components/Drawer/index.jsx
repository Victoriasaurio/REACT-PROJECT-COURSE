import React from "react";
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Divider } from "@mui/material";
import { drawerWidth, DrawerHeader } from "./DrawerEngine"

const DrawerSidebar = (props) => {
    const theme = useTheme()
    // const [open, setOpen] = React.useState(false)

    return(
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={props.open}
        >
            <DrawerHeader>
                <IconButton onClick={props.handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            {props.children}
        </Drawer>
    )
}

export default DrawerSidebar