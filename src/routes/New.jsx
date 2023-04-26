import { Link } from 'react-router-dom'

import Default from '@components/layouts/Default'

function New() {

  return (
    <Default>
     <h1>New</h1>
     <Link to={`/`}>Home</Link>
    </Default>
  )
}

export default New
