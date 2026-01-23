import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home/Home"
import Videopage from "../pages/Videopage"
import LiveVideo from "../pages/Livevideo"
import NotFound from "../pages/NotFound"
import WhoWeAre from "../pages/WhoWeAre"
import WhatWeBelieve from "../pages/WhatWeBelieve"
import RadioPrograms from "../pages/RadioPrograms"
import ContactUs from "../pages/ContactUs"
import Sermons from "../pages/Sermons"
import OurMusic from "../pages/OurMusic"
import Dailydevotion from "../pages/DialyDevotion"
import NewsLetter from "../pages/NewsLetter"
import SevenMajorProphecies from  "../pages/SevenMajorProphecies"
import MissionaryField from "../pages/MissionaryField"
import Mission from "../pages/Mission"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Home />},
            {path: "/video-page/:videoid", element: <Videopage />},
            {path: "/live-stream", element: <LiveVideo />},
            {path: "/who-we-are", element: <WhoWeAre />},
            {path: "/what-we-believe",element: <WhatWeBelieve />,},
            {path: "/radio-programs",element: <RadioPrograms />},
            {path: "/contact-us", element: <ContactUs />},
            {path: "/sermons", element: <Sermons />},
            {path: "/our-music", element: <OurMusic />},
            {path: "/daily-devotion", element: <Dailydevotion />},
            {path: "/news-letter", element: <NewsLetter />},
            {path: "/missionary-field", element: <MissionaryField />},
            {path: "/mission", element : <Mission /> },
            {path: '*', element: <NotFound />},
            {path: "seven-major-prophecies", element: <SevenMajorProphecies />},
        ]
    },
]);



export default router;