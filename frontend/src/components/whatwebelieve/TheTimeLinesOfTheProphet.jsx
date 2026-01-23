import React from 'react'
import { Link } from "react-router-dom"

//material ui accordion
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';



const theTimeLines = [
  {  
    "number":"1", 
    "title": "June 1906, The Azusa street Pentecostal Revival",
    "content":"June 1906 Azusa street Pentecostal Revival in Los Angeles California, USA",
    "imageUrl":"",
  },
  {
    "number":"2", 
    "title": "6th April 1909, The Birth of Br Branham",
    "content":"6th April 1909 Birth of Br Branham in Kentucky, USA",
    "imageUrl":"",
  },
    {  
    "number":"3", 
    "title": "1916, Do not drink or smoke or de le yourself in any way",
    "content":`Br. Branham heard a voice from poplar tree saying “do not drink, or smoke or de le 
                yourself in any way, there will be work for you to do when you get older”. Every time 
                he tried to drink, or smoke, the whirlwind would come.`,
    "imageUrl":"",
  },
  {
    "number":"4", 
    "title": "1916, First Vision seen and fulilled",
    "content":`First vision to be seen was of a bridge construction on River Ohio in which a number 
                of people (16 men) fell in the river and died. This came to pass 22 years later when the 
                Second Street bridge in Louisville, Kentucky was built on Ohio River in which 1
                6 people died`,
    "imageUrl":"",
  },
  {
    "number":"5", 
    "title": "1923 The Vision of Hell",
    "content":`While hunting one evening, he was accidentally shot on both legs and taken to hospital 
              in a critical condition. Gets into a vision of hell in which he died and descended into 
              bottomless pit full of darkness and horror. He cried to God for mercy and promised that 
              if God could let him go back and live, he will be a good boy. He later recovered.`,
    "imageUrl":"",
  },
  {
  "number":"6", 
    "title": "Dec 1932, Starts Ministry as a Baptist preacher",
    "content":` Dec 1932 Starts the Ministry as a Baptist preacher`,
    "imageUrl":"",
  },
  {
    "number":"7", 
    "title": "June 1933, The Seven Major Visions",
    "content":`The seven major continuous visions that came to me one Sunday morning in June, 1933. 
            The Lord Jesus spoke to me and said that the coming of the Lord was drawing nigh, 
            but that before He came, seven major events would transpire. I wrote them all down and 
            that morning I gave forth the revelation of the Lord.`,
    "imageUrl":"",
    "subcontent":[
      {
      "no":"i",
       "text":`Mussolini would invade Ethiopia and that nation would "fall at his steps".`
      },
      {
      "no":"ii",
      "text":`Foretold that an Austrian by the name of Adolph Hitler would rise up as dictator over 
            Germany`
      },
      {      
      "no":"iii",
      "text":`In the realm of world politics for it showed me that there would be three great ISMS, 
            Facism, Nazism, Communism, but that the rst two would be swallowed up into the third`
      },
      {
      "no":"iv",
      "text":`Showed the great advances in science that would come after the second world war`,
      },
      {
       "no":"v",
       "text":`Had to do with the moral problem of our age, centering mostly around women`
      },
      {
      "no":"vi",
       "text":` There arose up in America a most beautiful, but cruel woman`,
      },
      {
      "no":"vii",
      "text":`Was wherein I heard a most terrible explosion. As I turned to look I saw nothing but debris, 
           craters, and smoke all over the land of America.`,
      }
    ],
  },
  {
    "number":"8", 
    "title": "June 1933 The Message to Forerun the Second coming of Jesus Christ",
    "content":`Conducts water baptism of 200 people in the presence of more 1000 people on River Ohio 
              at the foot Spring Street, Je ersonville. While baptizing the 17th person, a sign of bright 
              Light from heaven like a star is seen descending and coming where he was and a voice was 
              heard saying, “as John the Baptist was sent to forerun the rst coming of Jesus Christ, you 
              are sent with a Message to forerun the second coming of Jesus Christ”.`,
    "imageUrl":"",
  },
    {
    "number":"9", 
    "title": "7th May 1946 The Commission from the Angel",
    "content":` An Angel appears to him and tells him “Do not fear. I am sent from the presence of 
                Almighty God to tell you that your peculiar birth and misunderstood life has been to 
                indicate that you are to take a gift of Divine healing to the peoples of the world. If you 
                will be sincere when you pray and can get the people to believe you, nothing shall stand 
                before your prayer, not even cancer. You will go into many parts of the earth and will pray 
                for kings and rulers and potentates. You will preach to multitudes the world over and 
                thousands will come to you for counsel. You must tell them that theirs thoughts speak 
                louder in heaven than their words. As the prophet Moses was given two signs to prove 
                he was sent from God, so you will be given two signs”. 
                “The rst sign – when you take a person’s right hand in your left hand, you will be able to 
                detect the presence of any germ caused disease by vibrations that will appear in your 
                left hand. Then you must pray for the person. If your hand returns to normal, you can 
                pronounce the person healed; if it doesn’t, just ask a blessing and walk away. Under the 
                anointing from God, do not try to think your own thoughts; it will be given you what to say.”
                “The second sign – is greater than the rst. If you will stay humble and sincere, it will come
                to pass that you will be able to tell by vision the very secrets of their hearts. Then the 
                people will have to believe you. This will initiate the Gospel in power that will bring on the 
                second coming of Christ.” `,
    "imageUrl":"",
  },

    {
    "number":"10", 
    "title": "May 1946-The First Sign of the Hand vibrating appears",
    "content":`After a church service, he held a sick person’s right hand into his left hand, and felt vibrations in his hand.
              He started praying for the person until vibration stopped. He saw the vision declaring the healing of the 
              cancer patient. This sign of the hand vibrating continued throughout his lifetime.`,
    "imageUrl":"",
  },
    {
    "number":"11", 
    "title": "July 1949 The Second Sign of discerning the hearts of people appears",
    "content":`While preaching in Regina, Saskatchewan in Canada before a crowd of 10,000 people, 
                during a prayer line, multiple visions occurred about the rst person in prayer line 
                showing how she became blind, her other health problems and where she comes from. 
                The woman was instantly healed of her in rmities. This sign of discerning the hearts of 
                people; what people have done in their past lives and their secrets followed Br Branh
                am throughout his lifetime. By the visions, he told people their problems and declare 
                their healing/deliverance in the Name of Jesus Christ.`,
    "imageUrl":"",
  },
  {
    "number":"12", 
    "title": "January 1950 Pillar of Fire photographed over the head of Br Branham",
    "content":`The Angel appeared in the form of Amber light and photographed above the head of Br Branham on 
               24th January 1950 in the Sam Houston Coliseum in Houston, Texas before thousands of people gathered for the meetings.`,
    "imageUrl":"",
  },
  {
    "number":"13", 
    "title": "13. Oct/Nov 1959 Creation of seven squirrels",
    "content":` While hunting in Indiana and Kentucky during the months October and November, Br Branham was 
                meditating on MARK 11:23 and God showed him that a man can be so anointed with the Holy Spirit that 
                when he opens his mouth it is like God speaking. After showing him this, God commanded him to speak what 
                he wished and it would be given to him. Br Branham spoke squirrels into existence on two occasions and they 
                appeared in di erent areas he spoke. After speaking one by one squirrel, he shot them for game meat. God then 
                revealed to him that these miracles foreshadowed a change in his ministry which would lead to a great climax 
                in the near future`,
    "imageUrl":"",
  },

    {
    "number":"14", 
    "title": "May 1960 Beyond the Curtain on Time",
    "content":`On Sunday morning of 8th May 1960, Br Branham had an experience in which he left 
              his body lying on the bed and was caught up in heaven with many sleeping saints he 
              had converted to Christ. All of them looked young and happy. Thousands times thousands 
              of people said they are resting on what he preached.`,
    "imageUrl":"",
  },

  {
    "number":"15", 
    "title": "July 1960	The Altar of Fire. ",
    "content":`While Br Branham was preaching in Lakeport California, God once again allowed Himself to be 
                photographed as colour of amber and as appearance of fire round about the pulpit. `,
    "imageUrl":"",
  },

    {
    "number":"17", 
    "title": "December 1960	The Angel of the LORD draws the Seven Church Ages.  ",
    "content":`While teaching the Exposition of the Seven Church Ages, the Angel of God came in the form of Light and
                started drawing all the Seven Church Ages on the wall in the church. This was seen by more than three 
                hundred people. This confirmed the teaching of the Seven Church Ages. `,
    "imageUrl":"",
  },
    {
    "number":"18", 
    "title": "February 1961	Thou hast chosen the Narrow Path and Heaven awaits you.",
    "content":`On 11th February, 1961, Br Branham was preaching for Full Gospel Business Men’s Fellowship International meeting 
               in California against sin and showing how churches were rejecting Christ. Danny Henry prophesied unconsciously 
               over Br Branham and it was interpreted by three people. “Because thou has chosen the narrow path, the harder way, 
               thou has walked of thy own choosing. Thou has did this by your own choosing. Thou has picked the correct and precise 
               decision, and it is My way. Because of this momentous decision, a huge portion of heaven awaits thee. What a glorious 
               decision thou has made. This in itself is that which will give and make come to pass the tremendous victory in the love divine.”
`,
    "imageUrl":"",
  },

        {
    "number":"19", 
    "title": "August 1961	Jehovah of the Old Testament is the Jesus of the New.",
    "content":`On 11th February, 1961, Br Branham was preaching for Full Gospel Business Men’s Fellowship International meeting 
               in California against sin and showing how churches were rejecting Christ. Danny Henry prophesied unconsciously 
               over Br Branham and it was interpreted by three people. “Because thou has chosen the narrow path, the harder way, 
               thou has walked of thy own choosing. Thou has did this by your own choosing. Thou has picked the correct and precise 
               decision, and it is My way. Because of this momentous decision, a huge portion of heaven awaits thee. What a glorious 
               decision thou has made. This in itself is that which will give and make come to pass the tremendous victory in the love divine.”
`,
    "imageUrl":"",
  },

  {
    "number":"20", 
    "title": "December 1962	Vision of Seven Mighty Angels",
    "content":`While at his home one morning, Br Branham got a vision of Seven might Angels coming from eternity at a 
               terrific speed in form of a pyramid. He was lifted up by the power of God to meet them in the air. This bothered him.”
`,
    "imageUrl":"",
  },

    {
    "number":"21", 
    "title": "January 1963	The Sword of the King given to Br Branham. ",
    "content":`Led by the Spirit of God to go to Sunset mountain, a Sword fell in his hand. The Sword which had pearl handle, real pretty, and 
               had a guard over it with gold, and the blade looked like chrome, like silver and shiny. As he held the Sword and wondered what 
               it meant, a loud voice said “It is the King’s Sword”. It was revealed to him that this is God’s Word handled to him.”
`,
    "imageUrl":"",
  },

      {
    "number":"22", 
    "title": "February 1963	Fulfilment of the Vision of Seven Mighty Angels. ",
    "content":`While hunting on Sunset mountain in Tucson, a blast shook the whole earth and Seven Angels met him and commissioned him to open 
               and preach the mysteries of the Seven Seals in Revelations. After meeting Br Branham, the Angels went back in a constellation 
               and made a ring of the cloud in the sky that formed the face of Christ. The picture of the Cloud was taken on 28th February and 
               later published in the May 1963 LIFE Magazine.`,
    "imageUrl":"",
  },

  {
    "number":"23", 
    "title": "March 1963	Revelation of the Seven Seals in REVELATION 6,7,8,9,10",
    "content":`From 17th to 24th March, Br Branham started preaching the revelation of the seven seals at his church as God was inspiring him. Every 
               morning an Angel of God could come and reveal to him the mystery of each seal. The seven seals hold the entire mystery of the Bible.`,
    "imageUrl":"",
  }
  ,
  
  {
    "number":"24", 
    "title": "June 1963	Everlasting sign given to Br Branham.",
    "content":`While driving one day and pondering over the rejection of his ministry, God gave him an everlasting sign to always remember. God showed 
    the seven mountains in Pony, Montana and told him that the seven peaks represent his name, life and stages of his ministry. God told him, “That, let 
    that stand, if there is ever a doubt in your mind, remember this place, come back here”. `,
    "imageUrl":"",
  },
  {
    "number":"25", 
    "title": "July 1964	The Preview of the Bride of Jesus Christ.",
    "content":`God showed him the vision of various end-time churches marching past a reviewing stand. The true Bride of Christ beautifully dressed and with 
              her magnificent long hair with a representation from every nation was presented. Various denominational churches were also presented but appeared very vulgar. 
              The last church was of this day age and was led by a witch and all immorally dressed, so filthy looking and marching to the time of twist and rock-and roll music.`,
    "imageUrl":"",
  },
  {
    "number":"26", 
    "title": "January 1965 This Day is This Scripture Fulfilled ",
    "content":`On Sunday 24th January 1965, in Phoenix, Arizona, Br Branham was invited to preach at the International Convention of the Full Gospel Business Men.  
                He was going to take his text on the subject "Birth Pains",  where Jesus said, "As a woman when she is in travail," in JOHN 16:21-22 that he failed to open to 
                the Scripture in his new Bible. So the Catholic Archbishop Most Rev John S. Stanley gave him his Bible to use it for Scripture reading and told Br Branham that 
                "There is a reason why it was done, and you know it, and God will show you something to bring out of this".Later that day he found out that the pages of his 
                Bible were stack where he wanted to read. The Spirit of God spoke to him of LUKE 4:16-22 and ISAIAH 61:1-2 , now being the time to proclaim the day of vengeance 
                of our God during Christ's Second coming.`,
    "imageUrl":"",
  },

    {
    "number":"27", 
    "title": "April 1965	Prophesy of the sinking of Los Angeles",
    "content":`On Sunday 24th January 1965, in Phoenix, Arizona, Br Branham was invited to preach at the International Convention of the Full Gospel Business Men.  
              He was going to take his text on the subject "Birth Pains",  where Jesus said, "As a woman when she is in travail," in JOHN 16:21-22 that he failed to open to 
              the Scripture in his new Bible. So the Catholic Archbishop Most Rev John S. Stanley gave him his Bible to use it for Scripture reading and told Br Branham that 
              "There is a reason why it was done, and you know it, and God will show you something to bring out of this".Later that day he found out that the pages of his 
              Bible were stack where he wanted to read. The Spirit of God spoke to him of LUKE 4:16-22 and ISAIAH 61:1-2 , now being the time to proclaim the day of vengeance 
              of our God during Christ's Second coming.`,
    "imageUrl":"",
  },
  {
    "number":"28", 
    "title": "April 1965	Prophesy of the sinking of Los Angeles",
    "content":`After preaching the Message, “Choosing of the Bride” on 29th April 1965, in Los Angeles, Br Branham gave this prophesy over Los Angeles 
              “Thou city, who claims to be the city of the Angels, who has exalted yourself into heaven, and sent all the dirty, filthy things of up our filth and send 
              it away, to your fine churches and steeples, and so forth, the way you do. Remember, one day you’ll be laying in the bottom of the sea, your great honeycomb 
              under you right now. The wrath of God is belching right beneath you. How much longer He will hold this sandbar hanging out over that? When, that ocean out yonder, 
              a mile deep, will slide in there, plumb back to the Salton Sea. It’ll be worse than the last day of Pompeii. Repent, Los Angeles.
              Repent, the rest of you, and turn to God. The hour of His wrath is upon the earth. Flee while there’s time to flee, and come into Christ.”
`,
    "imageUrl":"",
  },
    {
    "number":"30", 
    "title": "24th Dec 1965	Br Branham passes on.",
    "content":`24th Dec 1965	Br Branham passes on.`,
    "imageUrl":"",
  },

]

const TheTimeLinesOfTheProphet = () => {
  return (
    <div className='my-20'>

        <div>
            <h2>
                The Time Lines of Brother Branham
            </h2>

            <h3>
                The Time Lines of Brother Branham give a summary of the Prophet’s Life and Ministry
            </h3><br />

        </div>

      { 
      theTimeLines.map((item)=>(   
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><span className="accordionNo">{item.number} </span> {item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {item.content}
            {
              (item.subcontent )&&(
                <>
                <ol className="subcontent">
                  {item.subcontent.map((subitem)=>(
                    <li>
                      <Link to="/seven-major-prophecies">
                         <span>{subitem.no + ")"}</span> &nbsp; {subitem.text}
                      </Link>
                    </li>
                  ))}              
                </ol>
                <Link to="/seven-major-prophecies"><button>Read More About The Seven Major Visions...</button></Link> 
                </>               
              )
            }
        </AccordionDetails>
      </Accordion>
        )) 
        }
    </div>
  )
}

export default TheTimeLinesOfTheProphet