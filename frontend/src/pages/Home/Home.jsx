

import HomePageSermons from './HomePageSermons'
import ChurchPropgram from '../../components/ChurchPropgram'
import Dailydevotion from '../../components/Dailydevotion'
import Audiosermons from '../../components/Audiosermons'
import Maplocation from '../../components/Maplocation'
import Whatwebelieve from '../../components/Whatwebelieve'
import HomeBanner from './HomeBanner'
import NewsLetters from '../../components/NewsLetters'


function Home() {

  return (
    <>
    <HomeBanner />
    <Dailydevotion />
    <NewsLetters/>
    <Whatwebelieve />   
    <ChurchPropgram />
    <HomePageSermons />
    <Audiosermons/>
    <Maplocation />
    </>
  )
}

export default Home
