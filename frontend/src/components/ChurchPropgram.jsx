import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const programs = [
    {
      "title":"Sunday Program",
       "items":[
        {"title":"Sunday School","time":"10:00AM - 11:00AM"},
        {"title":"Morning Service", "time":"11:00AM - 1:00PM"},
        {"title":"Evening Service", "time":"3:00PM - 5:00PM"},
       ]
    }, 
    {
      "title":"Wednesday Program",
       "items":[
        {"title":"Every Wednesday","time":"5:00PM - 6:00PM"},
       ]
    },
    {
      "title":"Special Programs",
       "items":[
         {"title":"The Lord's Supper & Foot Washing", "desccription":"Every First Sunday Of The Month", "time":"5:00PM - 7:00PM"},
        {"title":"Youth Meetings", "desccription":"Every Second Sunday Of The Month", "time":"3:00PM - 5:00PM"},
        {"title":"Marriage Meetings", "desccription":"Every Last Sunday Of The Month", "time":"3:00PM - 5:00PM"},
        {"title":"Over Nights", "desccription":"Every Last Friday Of The Month", "time":"9:00PM - 5:00AM"},
       ]
    },

    {
      "title":"Radio Programs",
       "items":[
        {
          "title": "Baba FM 87.7", 
          "subitems":[
          {"title":"Friday Program",  "time":"7:30PM - 9:00PM"},
          {"title":"Sunday", "time":"8:20AM - 9:00AM"},
        ]
        },      
        {
          "title": "Busoga One FM 90.6", 
          "subitems":[
          {"title":"Tuesday Program",  "time":"7:15PM - 8:00PM"},
          {"title":"Saturday", "time":"6:00AM - 7:00AM"},
          {"title":"Sunday", "time":"9:15AM - 10:00AM"},
        ]
        } 

       ]
    },
]


const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };


export const ChurchPropgram = () => {
  return (
    <div class="wrapper">
    <h2>Church Program</h2>
    <h3>
      We have the weekly sunday program, wednesday program, over nights, youth meetings, marriage meetings, and 
      prayer and fasting meetings
    </h3>
            
    <div className="underline">
      <p></p>
    </div>

      <Swiper
loop={true}
  modules={[Pagination]}
  spaceBetween={30}
  slidesPerView={1} // Start with 1 slide on very small screens (default)
  breakpoints={{
    // For screens >= 640px
    640: {
      slidesPerView: 1, // Show 2 slides
      spaceBetween: 20,
    },
    // For screens >= 768px
    768: {
      slidesPerView: 1, // Show 2 slides (as per your current config)
      spaceBetween: 40,
    },
    // For screens >= 1024px
    1024: {
      slidesPerView: 3, // Show 3 slides
      spaceBetween: 50,
    },
    // For screens >= 1180px (if you need more than 3 on very wide screens)
     1180: {
       slidesPerView: 4,
       spaceBetween: 50,
     },
  }}
  pagination={pagination} // Corrected pagination prop
  className="mySwiper"
      >

        {programs.map((program)=>(
            <SwiperSlide>
              <div class="programDiv">
                <h1>{program.title}</h1>
                <div className="progUnderline">
                <p></p>
               </div>

                { program.subtitle && <h2>{program.subtitle}</h2> }

                {program.items &&
                (
                  <div class="proContent">
                 {
                   program.items.map((item)=>( 
                    <table>
                      <tr><td class="itemTitle">{item.title}</td></tr>
                      { item.desccription && (
                        <>
                        <tr><td  class="itemDesc">{item.desccription}</td></tr>
                        </>
                      )}
                      {
                        item.time &&(
                          <tr><td class="itemTime">{item.time}</td></tr>
                        )
                      }
                      {
                      item.subitems &&(
                        
                          item.subitems.map((subitem)=>(
                        <>
                         <tr><td class="itemSubTitle"><b><i>{subitem.title}</i></b></td></tr>
                         <tr><td class="itemTime">{subitem.time}</td></tr>
                        </>
                      ))    
                      )
                    }             
                    </table>
                   ))
                  }
                 </div>
                )
                }


              </div>      
            </SwiperSlide>
        ))}
      

      </Swiper>
    </div>
  )
}

export default ChurchPropgram





