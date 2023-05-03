import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="t-error">
      <h1>Error</h1>
      <Link to={`/`}>Home</Link>
    </div>
  )
}
