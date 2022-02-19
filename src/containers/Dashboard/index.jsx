import React from "react";
import LayoutInternal from "../../utils/layouts/LayoutInternal";
import { Typography } from "@mui/material";
import { getItems } from "../../api/itemsService";

const Dashboard = () => {
    
    React.useEffect(() => {
        getItems()
    }, [])

    return (
        <LayoutInternal sectionTitle="Tablero">
            <Typography paragraph>
                ¡Bienvenido a tu tablero!
            </Typography>
        </LayoutInternal>
)}

export default Dashboard