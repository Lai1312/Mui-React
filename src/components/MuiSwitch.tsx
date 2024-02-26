import { Box, FormControlLabel, Switch } from "@mui/material";
import  {useState} from 'react'


export const MuiSwitch = ()=> {
    const [checked, Setchecked] = useState(false)
    console.log ({ checked})
    const handleChange= (event: React.ChangeEvent<HTMLInputElement>) => {
        Setchecked(event.target.checked)
    }
 return ( 
    <Box>
        <FormControlLabel label = 'Dark mode' control= {<Switch checked= {checked} onChange= {handleChange} 
        size= 'small'
        color= 'success'/>} />

    </Box>
 )


}

