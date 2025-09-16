
import ContactForm from "./ContactForm";
import { ThemeProvider,createTheme,FormControlLabel,Switch ,useMediaQuery} from "@mui/material";
import { useState,useEffect} from "react";
import './App.css';
import ContactFormMobile from "./ContactFormMobile";
function App() {

  useEffect(()=>{
  document.title = 'Contact Form UI';
  },[])

  const lightTheme = createTheme({
   mode:{
    light:{
      color:'hsl(187, 24%, 22%)',
      backgroundColor:'hsl(0, 0%, 100%)',
      buttonColor:{
        color:'hsl(0, 0%, 100%)',
        backgroundColor:'hsl(169, 82%, 27%)'
      },
      error:{
        color:'#d32f2f'
      }
    }
   }
  })

   const darkTheme = createTheme({
   mode:{
    light:{
      color:'hsl(0, 0%, 100%)',
      backgroundColor:'hsla(170, 37%, 34%, 1.00)',
      buttonColor:{
        color:'hsl(169, 82%, 27%)',
        backgroundColor:'hsl(0, 0%, 100%)'
      },
      error:{
        color:'orange'
      }
    }
   }
  })

  const[mode,setMode]=useState(false);
  const mediumdev = useMediaQuery('(min-width:700px)');
  return (
    <>
    <ThemeProvider theme={mode? darkTheme: lightTheme}>
    <FormControlLabel control={<Switch  sx={{position:"relative",left:"90vw",
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: lightTheme.mode.light.buttonColor.backgroundColor, 
          '& + .MuiSwitch-track': {
            backgroundColor: lightTheme.mode.light.buttonColor.backgroundColor, 
          },
        },
        '& .MuiSwitch-track': {
          backgroundColor: 'gray'
        },
      }} checked={mode} onChange={(e)=>{
      setMode(e.target.checked)}}/>}/>
     {mediumdev ? <ContactForm /> : <ContactFormMobile/>}
     </ThemeProvider>
     </>
  );
}

export default App;
