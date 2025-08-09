import React from 'react'

//import custom componetns
import RadioNodeList from '../components/radioprograms/RadioProgsList'


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

    <div className="w-100" >
       <div class="OverLay">
           <h1>Radio Programs</h1>
       </div> 
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