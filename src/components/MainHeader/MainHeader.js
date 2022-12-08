import React, { Fragment } from 'react'

import Header from './Header/Header'
import Announcement from './Announcement/Announcement'

import './MainHeader.css'
import { AppBar } from '@mui/material'


const MainHeader = () => {


  return (

   
   
          <div >
        
        <AppBar>
          <Announcement />
          <Header />
          </AppBar>
          </div>


  )
}

export default MainHeader