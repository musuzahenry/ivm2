import React from 'react'
import { useParams } from 'react-router-dom';

const PlayVideo = (props) => {
    {
        /*
         * This component receives a Live YouRube video which then it displays using Youtube's vidoe embed syntax
         */
    }


  return (

    
    <> 
    { props.livevidobj === "" ? "No Video To Play " : 
    <>
    
    <div className='playVideo'>
    <iframe  
        src={`https://www.youtube.com/embed/${videoid}`} 
        frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe> 

     </div>
      </>
    }
    </>
  )
}

export default PlayVideo