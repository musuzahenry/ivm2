import React, { useState, useEffect } from 'react';
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
import SermonsThumb from "../../assets/images/SermonsTall.jpg"
import WhatWeBelieveImg from "../../assets/images/WhatWeBelieve.jpg"
import WhatWeBelieveThumb from "../../assets/images/WhatWeBelieveTall.jpg"
import GroupPhoto from "../../assets/images/GroupPhoto.jpg"
import GroupPhotoThumb from "../../assets/images/GroupPhotoTall.jpg"
import LiveStream from "../../assets/images/liveStream.jpg"
import liveStreamThumb from "../../assets/images/liveStreamTall.jpg"


const sliderInfo = [
    {   "key":"0",
        "title":"Who We Are",
        "excerpt":`We are a Faith based group of Believers whose lives are sold out to the cause of 
                  Jesus Christ. As the Gospel in the Holy Bible in MATTHEW 24:14 says 'And this Gospel of the 
                  Kingdom shall be preached in all the world for a witness unto all nations; and then shall the 
                  end come`,
        "imageUrl":GroupPhoto,
        "thumbNail":GroupPhotoThumb,
        "link":"who-we-are",
        "link2":{"link":"contact-us","text":"Contact Us"}
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
        "link":"live-stream",
        "link2":{"link":"sermons","text":"Other Sermons"}
    }
]

const HomeBanner = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the 'md' breakpoint
    };

    checkSize(); // Initial check
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);


  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
   <div className="homeBanner homeBannermb">

   
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
            { isMobile ? <img className = 'slideImg mdSlideImg' src = {slide.thumbNail} /> : <img className = 'slideImg mdSlideImg' src = {slide.imageUrl} /> } 
                              
            <div className="homeSliderContent">
            <h2 className="bannerH2"><Link to={slide.link}>{slide.title}</Link></h2>
            <div className="underline">
                  <p></p>
            </div>
            <p>{slide.excerpt}</p>

            <p className='flex w-full justify-center'>
            <Link to={slide.link} className='m-1'>
              <button className='btn'><FaLink /> &nbsp;Read More</button>
            </Link>
            {
              slide.link2 &&(
                <Link to={ slide.link2.link} className='m-1 '>
                  <button className='btn btn-crimson'><FaLink /> &nbsp;{ slide.link2.text }</button>
                </Link>
              )
            }
            </p>
            </div>
        </SwiperSlide>
      ))
     }
    </Swiper>

    </div>

    </>
  )
}

export default HomeBanner