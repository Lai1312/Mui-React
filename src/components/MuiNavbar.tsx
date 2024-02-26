import {AppBar, Toolbar, IconButton, Typography, Stack, Button,Menu, MenuItem } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import React, {useState} from 'react'
import { KeyboardArrowDown } from '@mui/icons-material';


export const MuiNavbar = ( ) => {
    const [anchorE1, setAnchorE1] = useState <null | HTMLElement>(null)
    const open = Boolean (anchorE1)
    const handleClickE1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorE1(event.currentTarget)
    } 
    const handleClose =  () => {
         setAnchorE1(null)
    } 

    return (
                <AppBar position ='static'>
                <Toolbar>
               < IconButton 
               size= 'large'
                edge= 'start' 
                color= 'inherit'
                aria-label= 'logo'>
                
                <CatchingPokemonIcon/>
               </IconButton>
    
              <Typography variant='h6' component='div' sx ={{flexGrow: 1}}>
               POKEMOONAP </Typography>
               <Stack direction= 'row' spacing={2}>
               <Button color='inherit'>Features</Button>
               <Button color='inherit'>Pricing</Button>
               <Button color='inherit'>About</Button>
               <Button color='inherit'id='resources-button'onClick={handleClickE1} 
               aria-controls ={open? 'resources-menu': undefined}
               aria-haspopup ='true'
               aria-expanded = {open ? 'true':  undefined}
               endIcon={<KeyboardArrowDown/>}> 
                Resources </Button>
             <Button color='inherit'>Log out</Button>
               </Stack>
        
               <Menu id='resources-menu' 
               anchorEl ={anchorE1} 
                open={open}
                MenuListProps= {{
                    'aria-labelledby': 'resources-button',}}
                onClose = {handleClose}
                anchorOrigin = {{
                    vertical : 'bottom',
                    horizontal: 'right'
                  }}

                 transformOrigin= {{
                   vertical: 'top',
                  horizontal:'right'

        }}>
     <MenuItem onClick={handleClose} >Blog</MenuItem>
    <MenuItem onClick={handleClose}>Podcast</MenuItem>
   </Menu>
               </Toolbar>
               </AppBar>
        
          
    ) 

}
