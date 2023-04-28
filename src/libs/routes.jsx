import { createBrowserRouter } from 'react-router-dom'

import Home from '@routes/Home.jsx'
import SignIn from '@routes/SignIn.jsx'
import Dashboard from '@routes/Dashboard.jsx'
import Recipes from '@routes/Recipes.jsx'
import New from '@routes/New.jsx'
import Planning from '@routes/Planning.jsx'
import SignUp from '@routes/SignUp.jsx'
import Recipe from '@routes/Recipe.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/recipes',
    element: <Recipes />,
  },
  {
    path: '/recipes/:id',
    element: <Recipe />,
  },
  {
    path: '/new',
    element: <New />,
  },
  {
    path: '/planning',
    element: <Planning />,
  },
])

export default routes
