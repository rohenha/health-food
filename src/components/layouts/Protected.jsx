import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { Col, Row } from 'antd'

import Navbar from '@components/organisms/navbar'

import { isLoggedIn } from '@store/auth'
import { nav } from '@libs/variables'

export default function Protected() {

  if (!isLoggedIn.value) {
    return <Navigate to="/sign-in" replace />
  }

  return (
    <>
      <Row>
        <Col span={18} offset={3}>
          <Outlet />
        </Col>
      </Row>
      <Navbar nav={nav} />
    </>
  )
}
