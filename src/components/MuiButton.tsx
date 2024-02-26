import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from"@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import {useState} from 'react'


export const MuiButton = () => {
    const [formats, setFormats] =useState<string | null>(null)
    console.log({
        formats,
    })
    const handleFormatChange = ( event: React.MouseEvent<HTMLElement>, updatedFormats: string |null  ) => {
        setFormats(updatedFormats)
    }
     return (
      <Stack spacing={4}>  
      <Stack spacing= {2} direction='row'>
      <Button variant='text'href='https://google.com'> Text</Button>
      <Button variant='contained'> contained</Button>
      <Button variant='outlined'>outlined</Button>
      </Stack>

     <Stack spacing= {2} direction='row'>
     <Button variant='contained'color='primary'> Primary</Button>
     <Button variant='contained'color='secondary'> Secondary</Button>
     <Button variant='contained'color='error'>Error</Button> 
     <Button variant='contained'color='warning'>Warning</Button>
     <Button variant='contained'color='info'>Info</Button>
     <Button variant='contained'color= 'success'>  Succes</Button>
     </Stack>
     <Stack display= 'block' spacing ={2} direction='row'>
     <Button variant='contained' size='small'>Small</Button>
     <Button variant='contained' size='medium'> Medium </Button>
     <Button variant='contained' size='large'> Large </Button>
     </Stack>
     <Stack spacing={2} direction='row'>
     <Button variant='contained' startIcon={<SendIcon/>} disableRipple onClick={() => alert('Clicked')}>Send</Button>
     <Button variant='contained' endIcon={<SendIcon/>} disableElevation> Send </Button>
      <IconButton aria-label='send'><SendIcon/> </IconButton>
      </Stack>

      <Stack direction='row'>
      <ButtonGroup
      variant='contained'
      orientation='vertical'
      size='small'
      color='secondary'
      aria-label='alignment buttongroup'>

      <Button onClick={()=> alert('Left clicked')}>Left</Button>
      <Button>Right</Button>
      <Button >Center</Button>
      </ButtonGroup> 
      </Stack>

      <Stack direction ='row'>
      <ToggleButtonGroup
      aria-label='textformatting'
      value ={formats}
      onChange={handleFormatChange}
      size='small'
      color ='success'
      orientation='vertical'
      exclusive >     
      <ToggleButton value='bold' raia-label='bold'><FormatBoldIcon/></ToggleButton>
      <ToggleButton value='italic' raia-label='italic'><FormatItalicIcon/></ToggleButton>
      <ToggleButton value='underlined' raia-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
     </ToggleButtonGroup>

       </Stack>
    </Stack>
   
    )
}
