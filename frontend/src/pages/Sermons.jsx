import React from 'react'
import Audiosermons from '../components/Audiosermons'
import Youtubebanner from '../components/Youtubebanner'

//import images
import SermonsImg from "../assets/images/Sermons.jpg"

const Sermons = () => {
  return (

    <>
    <div className="w-100 PageHeading" style={{ backgroundImage: `url(${SermonsImg})` }} >
             <div class="OverLay">
                  <h1>Sermons</h1>
             </div> 
    </div>

    <div className="wrapper">

        <Youtubebanner />
        <Audiosermons />
   
    </div>
    </>
  )
}

export default Sermons