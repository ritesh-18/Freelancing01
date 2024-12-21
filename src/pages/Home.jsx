import React from 'react'
import Navbar from '../components/Navbar'
import Nav2Bar from '../components/Nav2Bar'
import Carousel from '../components/Carousel'
import ServiceBox from "../components/Servixes"
import { Typography ,Box ,  } from '@mui/material'
import ClientComponent from '../components/Clients'
import CalculationComp from '../components/CalculationComp'
import Footer from '../components/Footer'
import abc from "../assets/images/clients/HMEL-Logo.png"
const Home = () => {
  return (
    <div className='h-12'>
      <Navbar />
      <Nav2Bar/>
      <Carousel/>
      <div style={{textAlign:"center" , fontSize:"22px" , fontWeight:"bold" , marginTop:"5px"}}>What we do</div>
      <Box sx={{ width: '60px', height: '4px', backgroundColor: '#3f51b5', margin: '8px auto' }} />
      <div style={{textAlign:"center" , fontSize:"22px" , fontWeight:"700" , color:"gray"}}>Our Services
      </div>
      <div style={{textAlign:"center" , fontSize:"16px" ,  color:"gray" , marginTop:"15px"}}>Here is how we are helping our clients to shape a better connected world..
      </div>
      <ServiceBox/>
      <ClientComponent/>
      <CalculationComp/>
      <Footer/>
   
    </div>
  )
}

export default Home
