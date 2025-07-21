import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import Videopage from "../pages/Videopage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Home />},
             {path: "/video-page/:videoid", element: <Videopage />},
        ]
    },
]);




export default router;