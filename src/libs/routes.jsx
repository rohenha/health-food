import { createBrowserRouter } from "react-router-dom"

import Home from '@routes/Home.jsx'
import SignIn from '@routes/SignIn.jsx'
import Dashboard from '@routes/Dashboard.jsx'
import Listing from '@routes/Listing.jsx'
import New from '@routes/New.jsx'
import Planning from '@routes/Planning.jsx'
import SignUp from "@routes/SignUp.jsx"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/sign-in",
    element: <SignIn/>,
  },
  {
    path: "/sign-up",
    element: <SignUp/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/listing",
    element: <Listing/>,
  },
  {
    path: "/new",
    element: <New/>,
  },
  {
    path: "/planning",
    element: <Planning/>,
  },
])

export default routes