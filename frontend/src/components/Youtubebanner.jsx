import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from './Spinner'

//import utils
import { baseURL } from '../utils/global_params'

// Import Swiper React components
import Slider from './banner/Slider'
import PlayVideo from './banner/PlayVideo'


function Youtubebanner() {


  const vids = 4 // set number of videos to display on this banner

  //al state variables
  const [liveVideos, setLiveVideos] = useState([]);
  const [normalVideos, setNormalVideos] = useState([]);
  const [loading, setLoading] = useState(true);

 
  
  //call the server using axios to pick the vidos
  useEffect(()=>{
    
    const fetchVideos = async()=>{
      try{
        const response = await axios.get('/api/videos/12')//for deployment
        //const response = await axios.get(`${baseURL}:3000/api/videos/${vids}`); //for dev
        setLiveVideos(response.data.liveVideos)
        setNormalVideos(response.data.normalVideos); 
        //alert("hh")
        setLoading(false)
      }catch(err){
         
        setError(err)
        setLoading(false)
      }
    } 
    
    fetchVideos();
      
  }, []); //useEffect will run only once after initial render



  return ( 
   <>
     {loading &&
        (
        <div className = "spinner"> <Spinner /></div>)  //if the vidoes are still loading display the loader 
    }
        
    {
    liveVideos.length >0 
        ? //if we have live videos, just pick the last video
        <>
          <PlayVideo livevidobj = {liveVideos[liveVideos.length - 1]}/> 
        </>
        : //if we dont have any live video, pick the last for vidoes and display them as a slider
        <>
          <Slider videosobj ={normalVideos}/>
          </>
      }
   </>  
  );
  

}


export default Youtubebanner;
