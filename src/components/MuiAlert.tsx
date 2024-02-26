import {Stack, Alert, AlertTitle, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const MuiAlert = () => {
    return (
        <Stack spacing={2}>
            <Alert severity='error'> This is an error alert</Alert>
            <Alert severity='warning'> This is a warning alert</Alert>
            <Alert severity='error'> This is an infor alert</Alert>
            <Alert severity='error'> This is an success alert</Alert>

            <Alert variant= 'outlined' severity='error'> This is an error alert</Alert>
            <Alert variant= 'outlined' severity='warning'> This is a warning alert</Alert>
            <Alert variant= 'outlined' severity='info'> This is an infor alert</Alert>
            <Alert variant= 'outlined' severity='success'> TThis is an success alert</Alert>

            <Alert variant= 'filled' severity='error' onClose={()=> alert('Close alert')}>
            <AlertTitle>  Error </AlertTitle>
            This is an error alert
            </Alert>
            <Alert variant= 'filled' severity='warning' > 
            <AlertTitle> Warning </AlertTitle>
            This is a warning alert 
            </Alert>
            <Alert variant= 'filled' severity='info' > 
            <AlertTitle> Info </AlertTitle>
            This is an Info alert 
            </Alert>
            <Alert variant= 'filled' severity='success' icon= { <CheckIcon fontSize='inherit'/>}action={
                <Button color='inherit' size= 'small'> UNDO</Button>
            }> 
            <AlertTitle> Success </AlertTitle>
            This is an Success alert 
            </Alert>

        </Stack>
    )
}

