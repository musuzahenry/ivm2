import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


//import icons
import { FaYoutube } from "react-icons/fa";


const SermonGrid = (props) => { //SliderDiv SermonGridWrapper
  return (
    <div className="wrapper SermonGridWrapper">

        <div className='wwbtext'>
           <h2>Most Recent Sermons</h2>
            <div className="underline">
               <p></p>
            </div>
           </div>

            <div className="SermonDiv">
            {
                props.videosobj.map((video) =>(
                    <div> 
                        <Link to={`/video-page/${video.videoId}`}>
                           <img className="gridImg" src={`https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`} alt={video.title} style={{ width: '450px' }} />
                        </Link>
                         
                        <div className="sermonGridContent">
                            <Link to={`/video-page/${video.videoId}`}>
                               <h1>{video.title}</h1>
                            </Link>
                        <p><br/>

                        <Link to={`/video-page/${video.videoId}`}>
                          <button>
                            <span className="videoIcon"><FaYoutube /></span> &nbsp;Watch Sermon
                          </button>   
                        </Link>
                        
                        </p>
                        </div>

                    </div>

                
                )
            )
            }
       </div>
   </div>

  )
}

export default SermonGrid