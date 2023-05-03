import { createBrowserRouter } from 'react-router-dom'

import Account from '@routes/Account.jsx'
import SignIn from '@routes/SignIn.jsx'
import Protected from '@components/layouts/Protected.jsx'
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
    path: '/app',
    element: <Protected />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'account',
        element: <Account />,
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
        className: 't-new',
      },
      {
        path: 'planning',
        element: <Planning />,
      },
    ],
  },
  {
    path: 'sign-in',
    element: <SignIn />,
  },
  {
    path: 'sign-up',
    element: <SignUp />,
  },
  // {
  //   path: '*',
  //   element: <Error />,
  // },
])

export default routes
