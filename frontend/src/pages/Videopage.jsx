import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom';
import { IoIosCloudDownload } from "react-icons/io";

//import images
import playVideoImg from "../assets/images/playVideo.jpg"


const Videopage = () => {

  const { videoid } = useParams();
  const location = useLocation()
  const video = location.state.video
  console.log(JSON.stringify(video))

  return (
    <> 
      <div className="w-100 PageHeading" style={{ backgroundImage: `url(${ playVideoImg })` }} >
          
            <div className="OverLay">
               <h1>Watch Sermon</h1>
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

     <div className='vidoeDetails'>
        <h3>{video.sermon && ( video.sermon.sermonTitle && ( video.sermon.sermonTitle))} </h3>
        <p>{ video.sermon && ( video.sermon.sermonExcept && ( video.sermon.sermonExcept )) } </p>
        
        <p className='downLoadLinks'>
          {
            video.sermon && (
            video.sermon.audioLink && (
              <a href={video.sermon.audioLink} target='_blank'>
                <button><IoIosCloudDownload /> &nbsp; Download Audio</button>
              </a>
            )) 
          }
        </p>
     </div>
    
    </>
    
  )
}

export default Videopage