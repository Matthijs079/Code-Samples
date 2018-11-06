import React, { Component } from 'react'
import Navlink from '../navlink/navlink'
import style from './logo.scss'
import Image from './images/Logo.svg'

class Logo extends Component {
  render () {
    return (
      <div className={style.logo}>
        <Navlink href='/'>
          <img src={Image} className={style.logo__image} />
        </Navlink>
      </div>
    )
  }
}

export default Logo
