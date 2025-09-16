import { Box ,Typography,useTheme} from "@mui/material";
import {CheckCircleOutline} from '@mui/icons-material';
const SuccessMessage = ()=>{
    const theme = useTheme();
    return(<>
    <Box sx={{padding:'10px 20px',borderRadius:'10px',backgroundColor:theme.mode.light.buttonColor.backgroundColor,color:theme.mode.light.buttonColor.color }}>
    <Box sx={{display:'flex',alignItems:"center",  fontFamily: "Karla",
  fontOpticalSizing: 'auto',
  fontWeight: '400',
  fontStyle: 'normal'}}>
  <CheckCircleOutline sx={{fontSize:"18px"}}/>
<Typography variant='subtitle2' sx={{marginLeft:"10px"}}>Message Sent!</Typography>
    </Box>
                
<Typography  sx={{marginTop:"3px",opacity:"0.7",fontSize:"12px"}}>Thanks for completing the form.We'll be in touch soon!</Typography>
    </Box>
    </>)
}

export default SuccessMessage;