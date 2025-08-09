import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from './Spinner'

//import utils
import { baseURL } from '../utils/global_params'

// Import Swiper React components
import Slider from './banner/Slider'
import PlayVideo from './banner/PlayVideo'


function Youtubebanner() {


  const vids = 14 // set number of videos to display on this banner

  //all state variables
  const [normalVideos, setNormalVideos] = useState([]);
  const [loading, setLoading] = useState(true);

 
  
  //call the server using axios to pick the vidos
  useEffect(()=>{
    
    const fetchVideos = async()=>{
      try{
        //const response = await axios.get(`/api/videos/${vids}`)//for deployment
        const response = await axios.get(`${baseURL}:3000/api/videos/${vids}`); //for dev
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



  //ignore the first for videos since they are in the video slider
  n = 0
  normalVideos.forEach(
    n < 5 ? video.del() : //do nothing   
    n += 1
  )

  return ( 
   <>
     {loading &&
        (
        <div className = "spinner"> <Spinner /></div>)  //if the vidoes are still loading display the loader 
    }
        
    { 
        <>
          {
          normalVideos.map(
            (video)=>{
              <div className='vidGrid'>

              </div>
            }
          )
          }
        </>
      }
   </>  
  );
  

}


export default Youtubebanner;
