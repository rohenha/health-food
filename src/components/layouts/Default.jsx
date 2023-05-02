import Navbar from '@components/organisms/navbar'

import { nav } from '@libs/variables'

export default function Layout({ children, className }) {
  return (
    <div className={className}>
      {children}
      <Navbar nav={nav} />
    </div>
  )
}
