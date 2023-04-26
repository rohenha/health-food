import { Link } from 'react-router-dom'

import Default from '@components/layouts/Default'


function Listing() {

  return (
    <Default>
     <h1>Listing</h1>
     <Link to={`/`}>Home</Link>
    </Default>
  )
}

export default Listing
