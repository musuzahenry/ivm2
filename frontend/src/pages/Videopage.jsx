import React from 'react'
import { useParams } from 'react-router-dom';

//import images
import playVideoImg from "../assets/images/playVideo.jpg"


const Videopage = () => {

  const { videoid } = useParams();

  return (
    <> 
      <div className="w-100 PageHeading" style={{ backgroundImage: `url(${ playVideoImg })` }} >
          
            <div class="OverLay">
               <h1>Daily Devoton</h1>
            </div>
            
      </div>
    
    <div className='playVideo'>
    <iframe  
        src={`https://www.youtube.com/embed/${videoid}`} 
        frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe> 
     </div>
    
    </>
    
  )
}

export default Videopage