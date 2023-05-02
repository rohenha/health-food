import { createBrowserRouter } from 'react-router-dom'

import Account from '@routes/Account.jsx'
import SignIn from '@routes/SignIn.jsx'
import Root from '@components/layouts/Root.jsx'
import Dashboard from '@routes/Dashboard.jsx'
import Recipes from '@routes/Recipes.jsx'
import New from '@routes/New.jsx'
import Planning from '@routes/Planning.jsx'
import SignUp from '@routes/SignUp.jsx'
import Recipe from '@routes/Recipe.jsx'
import EditRecipe from '@routes/EditRecipe.jsx'
import Error from '@routes/Error.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <SignIn />,
      },
      {
        path: 'account',
        element: <Account />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'recipes',
        element: <Recipes />,
      },
      {
        path: 'recipes/:id',
        element: <Recipe />,
      },
      {
        path: 'recipes/:id/edit',
        element: <EditRecipe />,
      },
      {
        path: 'new',
        element: <New />,
      },
      {
        path: 'planning',
        element: <Planning />,
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <Error />,
  // },
])

export default routes
