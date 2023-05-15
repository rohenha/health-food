import { useContext } from 'react'

import { AuthContext } from '@contexts/AuthContext'

export default function Account() {
  const { user } = useContext(AuthContext)

  if (!user) {
    return (
      <div className="t-account">
        <h1>Mon compte :</h1>
      </div>
    )
  }
  return (
    <div className="t-account">
      <h1>
        Mon compte : {user.firstname} {user.lastname}
      </h1>
    </div>
  )
}
