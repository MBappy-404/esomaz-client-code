import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";
import Media from "../Pages/Media/Media";
import Profile from "../Pages/Profile/Profile";
import SignIn from "../Pages/Sign Up & Sign In/SignIn";
import SignUp from "../Pages/Sign Up & Sign In/SignUp";
import Watch from "../Pages/Watch/Watch";
import ChatBox from "../Pages/ChatBox/ChatBox"
import People from "../Pages/People/People";
import Saved from "../Pages/Saved/Saved";
import Report from "../Pages/Report/Report";
import Notification from "../Pages/Notification/Notification";
import Video from "../Pages/Video/Video";
import PostDetails from "../Pages/Media/PostDetails";
 

const router = createBrowserRouter([
     {
          path:'/',
          element: <Main></Main>,
          children:[
              
               {
                    path:'/',
                    element: <Home></Home>
               },
              
               {
                    path: '/home',
                    element: <Home></Home>
               },
               {
                    path: '/media',
                    element: <Media></Media>
               },
               {
                    path: '/postDetails/:id',
                    element: <PostDetails></PostDetails>,
                    loader:  ({params}) => fetch(`https://e-somaz-server.vercel.app/postDetails/${params.id}`),

               },
               {
                    path: '/about',
                    element: <About></About>
               },
              
               {
                    path:'/profile',
                    element: <Profile></Profile>
                    
               },
               {
                    path:'/watch',
                    element: <Watch></Watch>
               },
               {
                    path:'/chat',
                    element: <ChatBox></ChatBox>
               },
               {
                    path:'/people',
                    element: <People></People>
               },
               {
                    path: '/saved',
                    element: <Saved></Saved>
               },
               {
                    path: '/report',
                    element: <Report></Report>
               },
             
              
               {
                    path: '/notification',
                    element: <Notification></Notification>
               },
               {
                    path: '/chat',
                    element: <ChatBox></ChatBox>
               },
               {
                    path:'/video',
                    element: <Video></Video>
               }
               
          ]
     },
    
     {
          path: '/signIn',
          element: <SignIn></SignIn>
     },
     {
          path: '/signUp',
          element: <SignUp></SignUp>
     },
])

export default router;