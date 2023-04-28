import { Link } from 'react-router-dom'

import Default from '@components/layouts/Default'

export default function Dashboard() {
  return (
    <Default>
      <h1>Dashboard</h1>
      <Link to={`/`}>Home</Link>
    </Default>
  )
}
