import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography,} from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width='300px'>
    <Card>
        <CardMedia
        component ='img'
        height= '140'
        image='https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png'
        alt= 'React image'/>
        <CardContent>
            <Typography gutterBottom variant= 'h5' component='div'>
                React
            </Typography>
            <Typography variant= 'body2' color='text.secondary'>
            React is the most popular javascript library for building user interfaces. It is fast, flexible and it also has a strong community sitting online to help you every time. The coolest thing about React is it’s based on components, you break down your complex code into individual pieces i.e components and that helps developers in organizing their code in a better way. A lot of companies are moving to React and that’s the reason most of the beginners and experienced developers also expanding their knowledge learning this library. 
            </Typography>
        </CardContent>
        <CardActions>
            <Button size= 'small'>Share
             </Button>
             <Button size= 'small'>LearnMOre
             </Button>
        </CardActions>
    </Card>
    </Box>
    
  )

}