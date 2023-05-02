import { Link } from 'react-router-dom'

import Protected from '@components/layouts/Protected'

export default function Dashboard() {
  return (
    <Protected>
      <h1>Dashboard</h1>
      <Link to={`/`}>Home</Link>
    </Protected>
  )
}
