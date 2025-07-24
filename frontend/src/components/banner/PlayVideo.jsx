import React from 'react'


const PlayVideo = (props) => {
    {
        /*
         * This component receives a Live YouRube video which then it displays using Youtube's vidoe embed syntax
         */
    }
    const videoid = props.livevidobj.videoId

  return (

    
    <> 
    { props.livevidobj === "" ? "No Video To Play " : 
      
    <>
    
    <div className='playVideo'>

      <h5 class="liveVid">WE ARE LIVE !</h5>
      
    <iframe width="852" height="480" src={`https://www.youtube.com/embed/${videoid}`} title="Has The Holy Ghost Been Given ? |  Pastor Katumba James | Inner Veil Ministries | 23.07.2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

    </iframe>

     </div>
      </>
    }
    </>
  )
}

export default PlayVideo