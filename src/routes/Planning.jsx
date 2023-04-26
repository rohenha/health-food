import { Link } from 'react-router-dom'

import Default from '@components/layouts/Default'

function Planning() {

  return (
    <Default>
     <h1>Planning</h1>
     <Link to={`/`}>Home</Link>
    </Default>
  )
}

export default Planning