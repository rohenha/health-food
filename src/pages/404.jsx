import { Link } from 'react-router-dom'
import { Button } from 'antd'

export default function Error() {
  return (
    <div className="t-error">
      <h1>Error</h1>
      <Link to={`/`}>Home</Link>
      <Button type="primary">Hello world</Button>
    </div>
  )
}
