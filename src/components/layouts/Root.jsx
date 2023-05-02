import { Outlet } from 'react-router-dom'

import Navbar from '@components/organisms/navbar'

import { nav } from '@libs/variables'

export default function Layout() {
  return (
    <div>
      <Outlet />
      <Navbar nav={nav} />
    </div>
  )
}
