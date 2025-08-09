import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import Videopage from "../pages/Videopage"
import LiveVideo from "../pages/Livevideo"
import NotFound from "../pages/NotFound"
import WhoWeAre from "../pages/WhoWeAre"
import WhatWeBelieve from "../pages/WhatWeBelieve"
import RadioPrograms from "../pages/RadioPrograms"




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Home />},
            {path: "/video-page/:videoid", element: <Videopage />},
            {path: "/live-stream", element: <LiveVideo />},
            {path: "/who-we-are", element: <WhoWeAre />},
            { path: "/what-we-believe", element: <WhatWeBelieve />},
            {path: "/radio-programs", element: <RadioPrograms />},
            {path: '*', element: <NotFound />},
        ]
    },
]);




export default router;