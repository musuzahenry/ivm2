
import Spinner from './Spinner'
import { FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { IoIosCloudDownload } from "react-icons/io";

function YoutubeGrid({sermons, loading}) {

  const navigate = useNavigate()

  function goToSingleSermon(video){
    navigate(`/video-page/${video.videoId}`, { state: {"video":video}})
  }

  if(loading){
    return(
         <div className = "spinner"> <Spinner /></div>  //if the vidoes are still loading display the spinner
    )
  }

  return ( 
   <>       
    { sermons && (
          <div className="wrapper SermonGridWrapper">

            <div className="SermonDiv">
             {              
              
                sermons.map((video) =>(
                    <div key={video.videoId}> 
                        <Link to={`/video-page/${video.videoId}`}>
                           <img className="gridImg" src={`https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`} alt={video.title} style={{ width: '450px' }} />
                        </Link>

                        <Link className='sermonTitle' to={`/video-page/${video.videoId}`}>
                               <h1>{video.title}</h1>
                        </Link>
                         
                        <div className="sermonGridContent">
   
                            {  //include a sermon sermonExcept if a sermon existst
                                video.sermon && (
                                <p className='sermonExcerpt'>
                                  {video.sermon.sermonExcept.slice(0,150)}
                                </p>
                              ) 
                            }
                                
                            <p className='youtubeGirdLinks'>
                                <button 
                                    onClick={()=>goToSingleSermon(video)}>
                                    <span className="videoIcon"><FaYoutube /></span> &nbsp;Watch Sermon 
                                </button>   
                               

                               { 
                               video.sermon && (
                                 video.sermon.audioLink && (
                                   <button className='btn-crimson' 
                                      onClick={()=>goToSingleSermon(video)}>
                                      <span className="videoIcon"><IoIosCloudDownload /></span> &nbsp; Download Sermon
                                   </button>  
                                 ))
                              } 
                              </p>
                        </div>

                    </div>

                
                )
            )
            
            }
       </div>
          </div>
    ) }
   </>  
  );  

}


export default YoutubeGrid;
