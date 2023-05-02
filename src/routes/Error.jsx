import { Link } from 'react-router-dom'

import Default from '@components/layouts/Default'

export default function Error() {
  return (
    <Default>
      <h1>Error</h1>
      <Link to={`/`}>Home</Link>
    </Default>
  )
}
