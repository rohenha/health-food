import { Link } from 'react-router-dom'

import Default from '@components/layouts/Default'

function SignIn() {

  return (
    <Default>
     <h1>Sign In</h1>
     <Link to={`/`}>Home</Link>
    </Default>
  )
}

export default SignIn
