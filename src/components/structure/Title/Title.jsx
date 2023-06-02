import React from 'react'
import { TitleStyle } from './style'

function Title({children ,className}) {
  return (
    <TitleStyle className={className}>
        {children}
        <div className="divisor"></div>
    </TitleStyle>
  )
}

export default Title