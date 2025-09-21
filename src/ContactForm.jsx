import {Box,Typography,TextField,Button,Checkbox,useTheme, FormControlLabel,RadioGroup,FormControl,Radio} from '@mui/material';
import {useForm,Controller} from 'react-hook-form';
import { ToastContainer ,toast} from 'react-toastify';
import SuccessMessage from './SuccessMessage';

const ContactForm = ()=>{
    const theme = useTheme();
    const {control,handleSubmit,formState:{errors},reset} = useForm({defaultValues:{
        First_Name:'',
        Last_Name:'',
        Email:'',
        Message:'',
        agreement: false,
        query_type:''
            }});

const submitData=(data)=>{
   reset();
   toast(<SuccessMessage/>,{hideProgressBar:true,closeButton:false,position:'top-center',autoClose:3000,className:"toast_classname"})

}
   
   return(<>
<ToastContainer />
    <Box sx={{margin:'1vw auto',padding:'3vw',width:'34vw',borderRadius:'15px',color:theme.mode.light.color,backgroundColor:theme.mode.light.backgroundColor}}>

<Typography variant='h6' sx={{fontWeight:'400'}}>Contact Us</Typography>
<form onSubmit={handleSubmit(submitData)} style={{margin:'10px auto 0px'}}>

<Box className ='grid_container'>

<label htmlFor='First_Name' className='label1' >First Name <sup>*</sup></label>
<Controller name='First_Name' className='text1' control={control} rules={{required:'First Name is required',pattern: {
            value: /^[a-zA-Z]{3,} [a-zA-Z]{2,}$/gi, 
            message: 'Please enter a valid First name',
          }}}
render={({field,fieldState})=>(<TextField  {...field}  id='First_Name' type='text' size='small'  autoComplete='off' sx={{'& .MuiInputBase-input':{fontSize:"0.8rem"},'& .MuiOutlinedInput-input':{color:theme.mode.light.color,'&:hover':{cursor:'pointer'}},'& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: theme.mode.light.buttonColor.backgroundColor
                  },
                    '&:hover fieldset': {
            border:`1px solid  ${ theme.mode.light.buttonColor.backgroundColor}`
                  }

        }, '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.mode.light.error.color
  }}} error={!!fieldState.error} helperText={fieldState.error? fieldState.error.message:''} 
        FormHelperTextProps={{
    style: { color: theme.mode.light.error.color }  
  }}/>)} />


<label htmlFor='Last_Name' className='label2'>Last Name <sup>*</sup></label>
<Controller control={control} className='text2' name='Last_Name' rules={{required:'Last Name is required',pattern: {
            value: /^[a-zA-Z]{3,}$/, 
            message: 'Please enter a valid Last name',
          }}} render={({field,fieldState})=>(<TextField  {...field} type='text' size='small'  id='Last_Name' autoComplete='off' error={!!fieldState.error} 
helperText={fieldState.error? fieldState.error.message : ''}  FormHelperTextProps={{style:{color:theme.mode.light.error.color}}}  sx={{'& .MuiInputBase-input':{fontSize:"0.8rem"},'& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.mode.light.error.color 
  },'& .MuiOutlinedInput-input':{color:theme.mode.light.color,'&:hover':{cursor:'pointer'}},'& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: theme.mode.light.buttonColor.backgroundColor
                  }
                  ,
                    '&:hover fieldset': {
            border:`1px solid  ${ theme.mode.light.buttonColor.backgroundColor}`
                  },
                 
        }}}/>)}/>
</Box>


<label htmlFor='Email'>Email <sup>*</sup></label>
<Controller control={control} name='Email' rules={{required:'Email is required',pattern:{value: /^[a-z-A-Z0-9]{1,}@[a-zA-Z]{1,}.+[a-zA-Z]{1,}$/,message:'Please enter valid email address'}}}
render={({field,fieldState})=>(<TextField {...field} type='text' size='small'  autoComplete='off' id='Email' fullWidth  error={!!fieldState.error} helperText={fieldState.error? fieldState.error.message : ''} FormHelperTextProps={{style:{color:theme.mode.light.error.color}}} sx={{'& .MuiInputBase-input':{fontSize:"0.8rem"},'& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.mode.light.error.color 
  },'& .MuiOutlinedInput-input':{color:theme.mode.light.color,'&:hover':{cursor:'pointer'}},'& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: theme.mode.light.buttonColor.backgroundColor
                  }
                  ,
                    '&:hover fieldset': {
            border:`1px solid  ${ theme.mode.light.buttonColor.backgroundColor}`
                  }
        }}}/>)}/>


<FormControl>
  <label>Query Type <sup>*</sup></label>
  <Controller control={control} name = 'query_type' rules={{required:"Please select query Type"}} render={({field})=>(
  <RadioGroup name='query_type'  row value={field.value}>
    <Box  className='grid_container2'>
  <Box className='label1_2' sx={{ borderRadius: '5px',
 border:'1px solid rgb(202, 201, 201)',
    height: '1.4375em',
    padding: '8.5px 20px',
    display:'block','&:hover':{border:`1px solid ${theme.mode.light.buttonColor.backgroundColor}`}}}>
<FormControlLabel  label='General Enquiry' value='general' control={<Radio size='small'  name='query_type' onChange={field.onChange} sx={{'&.Mui-checked': {
          color: theme.mode.light.buttonColor.backgroundColor 
        }}}/>} sx={{'& .MuiTypography-root':{fontSize:'0.8rem',  fontFamily: "Karla",
  fontOpticalSizing: 'auto',
  fontWeight: '400',
  fontStyle: 'normal'},margin:'-8px'}}/>
  </Box>
  
    <Box className='label2_2' sx={{ borderRadius: '5px',
 border:'1px solid rgb(202, 201, 201)',
    height: '1.4375em',
    padding: '8.5px 20px',
    display:'block','&:hover':{border:`1px solid ${theme.mode.light.buttonColor.backgroundColor}`}}}>
<FormControlLabel  label='Support Request' value = 'support' control={<Radio size='small' name='query_type' onChange={field.onChange} 
sx={{'&.Mui-checked': {
          color: theme.mode.light.buttonColor.backgroundColor ,
        }}}/>} sx={{'& .MuiTypography-root':{fontSize:'0.8rem',  fontFamily: "Karla",
  fontOpticalSizing: 'auto',
  fontWeight: '400',
  fontStyle: 'normal'},margin:"-8px"}}/>
  </Box>
</Box>
</RadioGroup>)}/>
</FormControl>
{errors.query_type && <p className='error_p' style={{color:theme.mode.light.error.color}}>{errors.query_type.message}</p>}


<label htmlFor='Message'>Message <sup>*</sup></label>
<Controller  control={control}  name='Message' rules={{required:'This field is required'}} 
render={({field,fieldState})=>(<TextField {...field} FormHelperTextProps={{style:{color:theme.mode.light.error.color}}} type='text' multiline={true} rows={3} fullWidth size='small'  autoComplete='off' id='Message' error={!!fieldState.error} helperText={fieldState.error? fieldState.error.message:''} sx={{'& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.mode.light.error.color 
  },'& .MuiOutlinedInput-input':{color:theme.mode.light.color,'&:hover':{cursor:'pointer'}},'& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: theme.mode.light.buttonColor.backgroundColor
                  },
                    '&:hover fieldset': {
            border:`1px solid  ${ theme.mode.light.buttonColor.backgroundColor}`
                  }
        }}} />)} />


<Controller control={control} name='agreement' rules={{required:'To submit this form, please consent to being contacted'}} render={({field})=>(
    <FormControlLabel label='I hereby constent to being contacted by the team *' sx={{'& .MuiTypography-root':{fontSize:'0.8rem'}}} control={<Checkbox size='small' sx={{'& .MuiSwitchBase-root':{'&:hover':{cursor:'pointer'}},'&.Mui-checked': {
    color: theme.mode.light.buttonColor.backgroundColor
  }}} color='info' checked={field.value} onChange={field.onChange}/>}/>
)}/>
{errors.agreement && <p className='error_p' style={{color:theme.mode.light.error.color}}>{errors.agreement.message}</p>}


<Button sx={{color:theme.mode.light.buttonColor.color,backgroundColor:theme.mode.light.buttonColor.backgroundColor,textAlign:'center',textTransform:'none',marginTop:'10px','&:hover':{cursor:'pointer'},'&:focus':{cursor:'pointer'}}}  variant='contained' type="Submit"
   fullWidth>Submit</Button>
</form>
    </Box>

    </>)
}

export default ContactForm;
