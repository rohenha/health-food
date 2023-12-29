import { memo } from 'react'
import { Typography } from 'antd'

const { Title } = Typography

import './Hero.scss'

const Hero = ({ title, subtitle = '' }) => {
  return (
    <section className="o-hero">
      <Title level={1}>{title}</Title>
      {subtitle && <p>{subtitle}</p>}
    </section>
  )
}

export default memo(Hero)
