import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import PlayVideo from '../components/banner/PlayVideo';

//import utils
import { baseURL } from '../utils/global_params';



function LiveVideo() {


  const vids = 1 // set number of videos to display on this banner

  //al state variables
  const [liveVideos, setLiveVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
  //call the server using axios to pick the vidos
  useEffect(()=>{
    
    const fetchVideos = async()=>{
      try{
        const response = await axios.get(`${baseURL}:3000/api/videos/${vids}`); // Assuming you want 10 videos
        setLiveVideos(response.data.liveVideos)
        //alert("hh")
        setLoading(false)
      }catch(err){         
        setError(err)
        console.log(err)
        setLoading(false)
      }
    } 
    
    fetchVideos();
      
  }, []); //useEffect will run only once after initial render



  return ( 
   <div class="wrapper">
     {loading &&
        (
        <div className = "spinner"> <Spinner /></div>)  //if the vidoes are still loading display the loader 
    }
      <>  
    {
        liveVideos ?

        liveVideos.length > 0 
        ? //if we have live videos, just pick the last video
          <PlayVideo livevidobj = {liveVideos[liveVideos.length - 1]}/> 
        : //if we dont have any live video, pick the last for vidoes and display them as a slider
          

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
  );
  

}


export default LiveVideo;
