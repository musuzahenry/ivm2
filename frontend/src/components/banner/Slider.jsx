import React, { useState } from 'react' //import react
import { Link} from 'react-router-dom';



//inport images
import shadow from "../../assets/images/shadow.png";

//import icons
import { FaYoutube } from "react-icons/fa";

// swiper js import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
//Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };


const Slider = (props) => {
    
    { console.log(props.videosobj)
     //This component receives an object containing a given number of youtube videos which it then dispalces
     //as a slider in the websites banner area
    }

  return (
        <>        
            <Swiper 
            navigation={true} pagination={pagination} loop={true} modules={[Pagination, Navigation]} className="mySwiper">

                {props.videosobj.map((video) => (
            
                <>
                <SwiperSlide key={video.videoId}>
                    
                    <div class="slider-div"> 
                       <Link to={`video-page/${video.videoId}`}>
                       <img className="sliderImg" src={`https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`} alt={video.title} style={{ width: '450px' }} />
                     </Link>
                     <img src={shadow} className="shadowImg" />

                    </div>
                    
                    <div className="sliderCaptions">
                    <h1>{video.title}</h1>
                     <p><br/>
   

                    <Link to={`video-page/${video.videoId}`}>
                        <button>
                          <span className="videoIcon"><FaYoutube /></span> &nbsp;Watch Video
                       </button>   
                    </Link>
                    
                    </p>
                    </div>
                    
                      <div class="swiper-pagination"></div>
                </SwiperSlide>
                </>
            ))}
            </Swiper> 
    </>
  )
}

export default Slider
