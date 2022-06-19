import { Box, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box 
        sx={{
            mt: { lg: '212px', xs: '70px'},
            ml: { sm: '50px'}
        }}
        position="relative"
        p="20px"
    >
        <Typography 
            color="primary" 
            fontWeight="600" 
            fontSize="26px">
            Fitness Club
        </Typography>
        <Typography 
            fontWeight="700" 
            sx={{
                fontSize: { lg: '44px', xs: '40px'}
            }}
            mb="23px"
            mt="30px"
        >
            Sweat, Smile, <br /> and Repeat 
        </Typography>
        <Typography
            fontSize="22px"
            lineHeight="35px"
            mb={3}
        >
            Check out the most effective exercises
        </Typography>
        <Button 
            variant="contained" 
            color="primary" 
            href="#exercises" 
            mb="4"
            sx={{
                padding: '10px 15px'
            }}
        >Explore Exercises</Button>
        <Typography
            fontSize="200px"
            fontWeight="600"
            color="primary"
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'}
            }}
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner