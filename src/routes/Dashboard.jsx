import { Link } from 'react-router-dom'

import Default from '@components/layouts/Default'


function Dashboard() {

  return (
    <Default>
     <h1>Dashboard</h1>
     <Link to={`/`}>Home</Link>
    </Default>
  )
}

export default Dashboard
