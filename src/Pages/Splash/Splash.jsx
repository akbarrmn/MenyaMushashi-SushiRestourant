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


const Splash = () => {
  return (
    <>
      <Container style={{ position:'relative' }}>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper" style={{ maxHeight: '100%', maxWidth: '100%' }}>
          <SwiperSlide>
            <Box component={'img'} src={Image1} sx={{ maxHeight: '100%', maxWidth: '100%', minHeight: '100vh', position: 'relative' }} />
            <Box sx={{ position: 'absolute', mt: '-280px', textAlign: 'center', maxWidth: '311px', left: '140px' }}>
              <Typography variant='h4' color={'white'} sx={{ fontWeigth: '700' }}>Menya Musashi</Typography>
              <Typography variant='caption' color={'white'} sx={{ fontWeight: '300', fontSize: '14px' }}>Both its signature and tsukemen dipping noodles are basic but spectacular – with chunks of melt-in-your-mouth beef, chewy noodles and addictive broth</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'img'} src={Image2} sx={{ maxHeight: '100%', maxWidth: '100%', minHeight: '100vh', position: 'relative' }} />
            <Box sx={{ position: 'absolute', mt: '-280px', textAlign: 'center', maxWidth: '311px', left: '140px' }}>
              <Typography variant='h4' color={'white'} sx={{ fontWeigth: '700' }}>Menya Musashi</Typography>
              <Typography variant='caption' color={'white'} sx={{ fontWeight: '300', fontSize: '14px' }}>Both its signature and tsukemen dipping noodles are basic but spectacular – with chunks of melt-in-your-mouth beef, chewy noodles and addictive broth</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'img'} src={Image3} sx={{ maxHeight: '100%', maxWidth: '100%', minHeight: '100vh', position: 'relative' }} />
            <Box sx={{ position: 'absolute', mt: '-280px', textAlign: 'center', maxWidth: '311px', left: '140px' }}>
              <Typography variant='h4' color={'white'} sx={{ fontWeigth: '700' }}>Menya Musashi</Typography>
              <Typography variant='caption' color={'white'} sx={{ fontWeight: '300', fontSize: '14px' }}>Both its signature and tsukemen dipping noodles are basic but spectacular – with chunks of melt-in-your-mouth beef, chewy noodles and addictive broth</Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
        <Button color='primary' variant='contained' sx={{ position:'absolute', bottom:15, right:20, zIndex:'10', width:'79px', height:'43px' }}>Skip</Button>
      </Container>
    </>
  )
}

export default Splash