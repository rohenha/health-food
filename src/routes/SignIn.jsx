import { Link } from 'react-router-dom'

import Default from '@components/layouts/Default'

export default function SignIn() {
  return (
    <Default>
      <h1>Sign In</h1>
      <Link to={`/`}>Home</Link>
    </Default>
  )
}
