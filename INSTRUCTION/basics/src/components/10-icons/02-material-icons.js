import {Container} from "react-bootstrap";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { AccountBalance, Adb} from '@mui/icons-material';
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";


const MaterialIcons = () => {
  return (
    <ThemeProvider theme={theme}>
       <Container className="my-5">
        <h1 className="text-center">Material Icons</h1> 
        <AcUnitIcon color="primary" fontSize="large"/>
        <AccountBalance sx={{color:"darkcyan", fontSize:"50px"}}/>
        <Adb color="myColor" fontSize="large"/>
        </Container>
    </ThemeProvider>
        
  )
}

export default MaterialIcons