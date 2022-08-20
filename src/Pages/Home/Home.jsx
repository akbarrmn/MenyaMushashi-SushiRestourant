import React from 'react'
import Container from '../../Components/Containers/Container'
import { Box, Button, Grid, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ProductImage from '../../Components/Image/ProductImage';
import StarIcon from '@mui/icons-material/Star';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ButtonLevel from '../../Components/Button/ButtonLevel';

const Home = () => {
  const [quantity, setQuantity] = React.useState(1);
  const addQuantity = () => {
    if (quantity <= 49) {
      setQuantity(quantity + 1)
    }
  }
  const removeQuantity = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1)
    }
  }


  return (
    <>
      <Container>
        <ProductImage />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '-30px', px: '20px' }}>
          <Box sx={{
            width: '120px',
            height: '30px',
            padding: '10px',
            backgroundColor: 'white',
            borderRadius: '36px',
            boxShadow: '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Typography sx={{ color: '#0F172B', fontWeight: 700, }}>
              Rp. 50.000
            </Typography>
          </Box>
          <Box sx={{
            width: '50px',
            height: '50px',
            backgroundColor: 'white',
            boxShadow: '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);',
            borderRadius: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FavoriteIcon sx={{ color: '#F24E1E' }} />
          </Box>
        </Box>
        <Grid container rowSpacing={2} direction={'column'} sx={{ p: 3 }}>
          <Grid container rowSpacing={2} item xs={8}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant='h6' sx={{ fontWeight: 700, }}>
                    Ramen Shoyu
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarIcon sx={{ color: '#FFB803' }} />
                    <Typography>
                      4.5 (96 Review)
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{
                  width: '90px', height: '30px', border: '2px solid #E8EAF0', borderRadius: '8px', padding: '8px',
                  display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'space-around', position: 'relative'
                }}>
                  <Button onClick={removeQuantity} sx={{
                    width: '24px',
                    height: '24px',
                    minWidth: 'unset',
                    backgroundColor: '#E8EAF0',
                    borderRadius: '4px',
                    position: 'absolute',
                    left: '10px'
                  }}>
                    <RemoveIcon />
                  </Button>
                  <Typography variant='h6' sx={{ fontWeight: 700 }}>
                    {quantity}
                  </Typography>
                  <Button onClick={addQuantity} sx={{
                    width: '24px',
                    height: '24px',
                    minWidth: 'unset',
                    backgroundColor: '#E8EAF0',
                    borderRadius: '4px',
                    position: 'absolute', right: '10px'
                  }}>
                    <AddIcon />
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'justify' }}>
              <Typography variant='h6' sx={{ fontWeight: 700, fontSize: '14px' }}>
                Deskripsi
              </Typography>
              <Typography variant='caption' >
                Shoyu artinya "kecap asin" dalam bahasa Jepang. Ramen ini merupakan jenis ramen klasik yang ringan. Shoyu ramen memiliki ciri khas yakni memiliki kuah yang berwarna hitam kecokelatan yang cerah karena mengandung kecap asin. Rasanya asin, gurih, segar, dan tajam. Topping paling umum yang disajikan shoyu ramen adalah rebung, nori, telur rebus, daun bawang dan juga tauge.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' sx={{ fontWeight: 700, fontSize: '14px', mb: 1 }}>
                Pilih Level Pedas
              </Typography>
              <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <ButtonLevel />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: 700, fontSize: '14px' }}>
                Deskripsi
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home