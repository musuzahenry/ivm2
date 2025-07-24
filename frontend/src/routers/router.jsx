import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import Videopage from "../pages/Videopage";
import LiveVideo from "../pages/Livevideo"
import NotFound from "../pages/NotFound"


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Home />},
            {path: "/video-page/:videoid", element: <Videopage />},
            {path: "/live-stream", element: <LiveVideo />},
            {path: '*', element: <NotFound />},
        ]
    },
]);




export default router;