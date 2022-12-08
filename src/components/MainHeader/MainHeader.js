import React, { Fragment } from 'react'

import Header from './Header/Header'
import Announcement from './Announcement/Announcement'

import './MainHeader.css'
import { AppBar } from '@mui/material'
import CartPageModel from '../Cart/CartPageModel'

const MainHeader = () => {





  return (


          <div >
            
        <AppBar sx={{height:'30px'}}>
          <Announcement />
          <Header />
         

          </AppBar>
          
          </div>

         
  )
}

export default MainHeader