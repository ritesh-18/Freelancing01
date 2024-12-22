import React from 'react'
import { Typography ,Box ,  } from '@mui/material'

const BelowCarousel = () => {
  return (
    <div>
      <div style={{textAlign:"center" , fontSize:"22px" , fontWeight:"bold" , marginTop:"5px"}}>What we do</div>
      <Box sx={{ width: '60px', height: '4px', backgroundColor: '#3f51b5', margin: '8px auto' }} />
      <div style={{textAlign:"center" , fontSize:"22px" , fontWeight:"700" , color:"gray"}}>Our Services
      </div>
      <div style={{textAlign:"center" , fontSize:"16px" ,  color:"gray" , marginTop:"15px"}}>Here is how we are helping our clients to shape a better connected world..
      </div>
    </div>
  )
}

export default BelowCarousel
