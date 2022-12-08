import React, { Fragment } from 'react'

import Header from './Header/Header'
import Announcement from './Announcement/Announcement'

import './MainHeader.css'
import { AppBar } from '@mui/material'


const MainHeader = () => {


  return (

    <AppBar>
    <div className='MainHeaderContainer'>
        
        
          <Announcement />
          <Header />

</div>
</AppBar>
  )
}

export default MainHeader