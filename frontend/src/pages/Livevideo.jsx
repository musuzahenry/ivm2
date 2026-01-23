import React, { useEffect, useState} from 'react';
import { apiFetch } from '../apiFetch';
import Spinner from '../components/Spinner';
import PlayVideo from '../components/banner/PlayVideo';


//import images
import LiveStream from "../assets/images/liveStream.jpg"


function LiveVideo() {

  //al state variables
  const [liveVideos, setLiveVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
  useEffect(function(){
    fetchVideos();
  }, [])

  const fetchVideos = async (token='') =>{      
        setLoading(true)
        try{
            const data = await apiFetch(`youtube/video-list?maxResults=2&token=${token}`)
            setLiveVideos(data.videos)
            //console.log('============>'+JSON.stringify(data.videos[0])+'========')
        }catch(error){
          setError(error.message)
          console.error("Failded fo fetch video list", error.message)
        }finally{
          setLoading(false)
        }
 
  }


  return ( 
    <>
     <div className="w-100 PageHeading" style={{ backgroundImage: `url(${LiveStream})` }} >
         <div className="OverLay">
              <h1>Live Stream</h1>
         </div> 
     </div>

   <div className="wrapper">
     {loading &&
        (
        <div className = "spinner"> <Spinner /></div>)  //if the vidoes are still loading display the loader 
    }
      <>  
    {
        liveVideos ?

        liveVideos.length > 0 
        ? //pick the last video, check whether it is a live video
           liveVideos[0].isLive === 'live' ?  (<PlayVideo sermon = {liveVideos[0]}/> ) 
        :
        //display message if there are no live videos
        <h2>          
            Sorry there is no live video right now
        </h2>   
          : //if there's no live video just show the message below      
        <h2>          
            Sorry there is no live video right now
         </h2>
        : 
        <h2>
            Sorry there is no live video right now
        </h2>
      }
      </>
   </div>  
   </>
  );
}


export default LiveVideo;
