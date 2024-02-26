import { Box } from '@mui/material';
import { styled } from '@mui/material'

export const MuiResponsiveness = () => {
    return (
        <>
            <Box sx={{
                height: '300px',
                width: {
                    xs: '100px', //0
                    sm: '200px', //600
                    md: '300px', //900
                    lg: '400px', //1200
                    xl: '500px', //1536
                },
                bgcolor: 'secondary.dark'
            }}>
            </Box>
        </>
    );
};