import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'

//import icons
import { FaLink } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

//import images
import SermonsImg from "../../assets/images/Sermons.jpg"
import SermonsThumb from "../../assets/images/SermonsThumb.jpg"
import WhatWeBelieveImg from "../../assets/images/WhatWeBelieve.jpg"
import WhatWeBelieveThumb from "../../assets/images/WhatWeBelieveThumb.jpg"
import GroupPhoto from "../../assets/images/GroupPhoto.jpg"
import GroupPhotoThumb from "../../assets/images/GroupPhotoThumb.jpg"
import LiveStream from "../../assets/images/liveStream.jpg"
import liveStreamThumb from "../../assets/images/liveStreamThumb.jpg"


const sliderInfo = [
    {   "key":"0",
        "title":"Who We Are",
        "excerpt":`We are a Faith based group of Believers whose lives are sold out to the cause of 
                  Jesus Christ. As the Gospel in the Holy Bible in MATTHEW 24:14 says 'And this Gospel of the 
                  Kingdom shall be preached in all the world for a witness unto all nations; and then shall the 
                  end come`,
        "imageUrl":GroupPhoto,
        "thumbNail":GroupPhotoThumb,
        "link":"who-we-are"
    },
    {   
      "key":"1",
        "title":"What We Believe",
        "excerpt":`The Lord Jesus Christ is the LORD GOD ALMIGHTY and Saviour of all mankind from whom 
                   all things have been created and consist. God is currently establishing His 
                   Eternal Kingdom here on earth through the preaching of the Infallible Word of God`,
        "imageUrl":WhatWeBelieveImg,
        "thumbNail":WhatWeBelieveThumb,
        "link":"what-we-believe"
    },
    {   
        "key":"2",
        "title":"Sermons",
        "excerpt":`Watch video sermons, listen to or download audio sermons from our online stock. For 
                   any doctrinal questions call +256 772 882224 or reach us by email on innerveilministries@gmail.com.`,
        "imageUrl":SermonsImg,
        "thumbNail":SermonsThumb,
        "link":"sermons"
    },
    {   "key":"3",
        "title":"Live Stream",
        "excerpt":`Watch live sermons from anywhere! We are always live on Sunday from 10:00AM - 1:00PM and Wednesday 5:30PM - 7:00PM UTC+03:00(Nairobi), East African Time`,
        "imageUrl":LiveStream,
        "thumbNail":liveStreamThumb,
        "link":"live-stream"
    }
]

const HomeBanner = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
   <div className="homeBanner">

   
    {
        /*
        Main slider
        ***********************************************************************/   
    }
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="homeSlider"
      >
      
    {
      sliderInfo.map((slide) => (
        <SwiperSlide key = {slide.key} >        
            <img src = {slide.imageUrl} />
            <div className="homeSliderContent">
            <h2 className="bannerH2"><Link to={slide.link}>{slide.title}</Link></h2>
            <div className="underline">
                  <p></p>
            </div>
            <p>{slide.excerpt}</p>
            <Link to={slide.link}>
              <button className='btn'><FaLink /> &nbsp;Read More</button>
            </Link>
            </div>
        </SwiperSlide>
      ))
     }
    </Swiper>



    {
        /*
        Thumbs slider
        ***********************************************************************/   
    }

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="homeSliderThumbs"
      >
        
            {
                sliderInfo.map((slide)=>(
                  <SwiperSlide>
                    <img src={slide.imageUrl} />
                  </SwiperSlide>
                ))
            }
       
      </Swiper>
    </div>
  )
}

export default HomeBanner