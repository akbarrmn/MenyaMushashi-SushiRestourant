import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Container from '../../Components/Containers/Container'
import Image1 from "../../Assets/Image1.jpg"
import Image2 from "../../Assets/Image2.jpg"
import Image3 from "../../Assets/Image3.jpg"
import "./Splash.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { Link } from 'react-router-dom'


const Splash = () => {
  return (
    <>
      <Container style={{ position: 'relative' }}>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          loop={true}
          style={{ maxHeight: '100%', maxWidth: '100%' }}>
          <SwiperSlide>
            <Box component={'div'} sx={{ maxHeight: '100%', maxWidth: '100%', backgroundSize: 'cover', backgroundImage: `url(${Image1})`, backgroundPosition: 'center', minHeight: '100vh' }}>
              <Box component={'div'} sx={{ minHeight: '100vh', maxWidth: '100%', maxHeight: '100%', }} />
              <Box sx={{ position: 'absolute', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', px: { md: '5rem', xs: '2rem' }, bottom: '120px' }}>
                <Typography variant='h4' color={'white'} sx={{ fontWeigth: '700' }}>Menya Musashi</Typography>
                <Typography variant='caption' color={'white'} sx={{ fontWeight: '300', fontSize: '14px' }}>Both its signature and tsukemen dipping noodles are basic but spectacular – with chunks of melt-in-your-mouth beef, chewy noodles and addictive broth</Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'div'} sx={{ maxHeight: '100%', maxWidth: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${Image2})`, minHeight: '100vh' }}>
              <Box sx={{ position: 'absolute', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', px: { md: '5rem', xs: '2rem' }, bottom: '120px' }}>
                <Typography variant='h4' color={'white'} sx={{ fontWeigth: '700' }}>Menya Musashi</Typography>
                <Typography variant='caption' color={'white'} sx={{ fontWeight: '300', fontSize: '14px' }}>Both its signature and tsukemen dipping noodles are basic but spectacular – with chunks of melt-in-your-mouth beef, chewy noodles and addictive broth</Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'div'} sx={{ maxHeight: '100%', maxWidth: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${Image3})`, minHeight: '100vh' }}>
              <Box sx={{ position: 'absolute', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', px: { md: '5rem', xs: '2rem' }, bottom: '120px' }}>
                <Typography variant='h4' color={'white'} sx={{ fontWeigth: '700' }}>Menya Musashi</Typography>
                <Typography variant='caption' color={'white'} sx={{ fontWeight: '300', fontSize: '14px' }}>Both its signature and tsukemen dipping noodles are basic but spectacular – with chunks of melt-in-your-mouth beef, chewy noodles and addictive broth</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
        <Link to={'/home'}>
          <Button color='primary' variant='contained' sx={{ position: 'absolute', bottom: 15, right: 20, zIndex: '10', width: '79px', height: '43px' }}>Skip</Button>
        </Link>
      </Container>
    </>
  )
}

export default Splash