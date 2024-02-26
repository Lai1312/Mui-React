import {Drawer, Box, Typography, IconButton} from'@mui/material'
import MenuIcon from  '@mui/icons-material/Menu'
import {useState} from 'react'

export const MuiDrawer = () => {
    const [isDraweropen, setDrawerOpen ] =useState (false)
 return (
    <>
    <IconButton 
    size ='large' 
    edge='start' 
    color='inherit' 
    aria-labael='logo' 
    onClick= {()=>setDrawerOpen(true)}>

     <MenuIcon/>
    </IconButton>
    <Drawer 
    anchor='left'
    open={isDraweropen}
    onClose={() => setDrawerOpen(false)}
    >
      <Box  p={2} width='250px' textAlign= 'center' role='presentation'>
     <Typography variant='h6' component='div'> Side Panel</Typography>

  </Box>
    </Drawer>
       </>
 )

}