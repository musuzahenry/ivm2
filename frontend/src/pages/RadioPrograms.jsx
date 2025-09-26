import React from 'react'

//import 
import radioImg from "../assets/images/radioProgram.jpg"

const programs = [
    {
      "title":"Baba FM 87.7",
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


        {
      "title":"Busoga One FM 90.6",
       "items":[      
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





const RadioPrograms = () => {
  return (
    <>

  { 
  //add background sermon
  // style={ /{ backgroundImage: `url(${SermonsImg})` }} 
  }
    <div className="w-100 PageHeading"  style={ { backgroundImage: `url(${radioImg})` }} >
                  <div class="OverLay">
                       <h1>Radio Programs</h1>
                  </div> 
   </div>


     <div className="wrapper">
      <p>
        The Radio Ministry has greatly sowed the Faith that we have received broadcasting wide and far to invisible audience. 
        Many have believed the Message of the Hour through the Radio Ministry and many churches opened up or converted to the Message.
        The Radio Ministry has greatly sowed the Faith that we have received broadcasting wide and far to invisible audience. Many have 
        believed the Message of the Hour through the Radio Ministry and many churches opened up or converted to the Message.
      </p>
      <p>
        The radio programs have also been possible to continue with support from friends and church members. 
      </p>
     </div>


    <div className='wrapper programPage'>
               {programs.map((program)=>(
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
        ))}     
            
    </div> 
    </>
  )
}

export default RadioPrograms