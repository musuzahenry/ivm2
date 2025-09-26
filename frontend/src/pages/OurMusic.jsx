import React from 'react'

//import images
import musicImg from "../assets/images/music.jpg"


const music_list =[
    {
        "artist":"",
        "image":"",
        "songTitle":"",
        "lyrics":"",
        "songUrl":"",
    }
]

const OurMusic = () => {
  return (
    <>
        <div className="w-100 PageHeading"  style={ { backgroundImage: `url(${musicImg})` }} >
          <div class="OverLay">
              <h1>Our Music</h1>
          </div> 
       </div>
    <div>OurMusic</div>
    </>
  )
}

export default OurMusic