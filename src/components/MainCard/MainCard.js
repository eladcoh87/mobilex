import React from 'react'
import './MainCard.css'
import CardItem from './CardItem'


const MainCard = () => {



  return (


    <div className='cardcontainer'>
        
        <CardItem className="carditem" title="PICK YOUR PHONE" para="The epic standard" imgurl="https://images.unsplash.com/photo-1528123778681-01e39b42808e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />

        <div className='hidecard'>
        <CardItem className="carditem"  title="ENJOY HIGH RES" para="DESIGN Flex" imgurl="https://images.unsplash.com/photo-1519944518895-f08a12d6dfd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
        </div>

        <div className='hidecard'>
        <CardItem className="carditem"  title="MUST-HAVE " para="smartphone to tablet"imgurl="https://images.unsplash.com/photo-1496345962527-29757c3a3d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
    </div>


  )




}

export default MainCard