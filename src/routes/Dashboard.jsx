import { Link } from 'react-router-dom'
import useAuth from '@hooks/Auth'

import Button from '@components/atoms/Button'

export default function Dashboard() {
  const { onLogout } = useAuth()

  const handleLogout = () => {
    onLogout()
  }
  return (
    <>
      <h1>Dashboard</h1>
      <Button className=" -secondary" onClick={handleLogout}>
        Se déconnecter
      </Button>
      <Link to={`/`}>Home</Link>
    </>
  )
}
