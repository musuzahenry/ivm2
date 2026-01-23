import React from 'react'
import { useLocation } from 'react-router-dom'


const PlayVideo = ({sermon}) => {
    {
        /*
         * This component receives a Live YouRube video which then it displays using Youtube's vidoe embed syntax
         */
    }
    
    console.log(sermon)



  return (

    
    <div className='wrapper'> 
    { sermon.isLive === 'live' ? "No Video To Play " : 
      
    <>  
      <div className='playVideo'>
          <h5 className="liveVid">WE ARE LIVE !</h5>    
          <iframe width="852" height="480" src={`https://www.youtube.com/embed/${sermon.videoId}`} title="Has The Holy Ghost Been Given ? |  Pastor Katumba James | Inner Veil Ministries | 23.07.2025" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
      </div>
    </>
    }
    </div>
  )
}

export default PlayVideo
