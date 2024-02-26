import {Stack, TextField, InputAdornment  } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useState} from'react'

export const MuiTextField = () => {
    const[value, setvalue]= useState('')
    return (
        <Stack spacing= {4}>
        <Stack direction= 'row' spacing={2}>
          < TextField label='Name'variant='outlined'/>
          < TextField label='Name'variant='filled'/>
          < TextField label='Name'variant='standard'/>
          </Stack>
    
          <Stack direction= 'row' spacing={2}>
          < TextField label='Small secondary'size= 'small' color='secondary' />

          < TextField label='Form Input'
          required value={value} 
          onChange={(e) =>setvalue (e.target.value)} error= {!value}
          helperText={!value?'Required':'Do not'} />
          </Stack>

          <Stack direction= 'row' spacing={2}>
          < TextField label='For Input'required />
          < TextField label='For Input'
          helperText='Do not share your password with anyone' />
           < TextField label='Password'
             InputProps={{startAdornment: <InputAdornment position ='start'> <VisibilityIcon/><VisibilityOffIcon/></InputAdornment>
            }}
              type='password'
            helperText='Do not share your password with anyone'/>
            < TextField label='Read only' InputProps={{readOnly: true}}/>
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='Amount'
                InputProps={{startAdornment: <InputAdornment position ='start'> $</InputAdornment>
                }}/>
                <TextField label='Weight' InputProps={{endAdornment: <InputAdornment position ='end'> kg </InputAdornment>
                }}/>
        </Stack>
        </Stack>

    )
}