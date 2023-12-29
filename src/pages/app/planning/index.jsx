// import { Link } from 'react-router-dom'
import { generatePlan } from '@libs/plan'
import { useContext } from 'react'

import { AuthContext } from '@contexts/AuthContext'

import Button from '@components/atoms/Button'

export default function Planning() {
  const { user } = useContext(AuthContext)
  console.log(user)
  const onGeneratePlan = () => {
    generatePlan({ user: user.id })
  }
  return (
    <div className="t-planning">
      <h1>Planning</h1>
      <Button onClick={onGeneratePlan}>Générer un nouveau plan</Button>
    </div>
  )
}
