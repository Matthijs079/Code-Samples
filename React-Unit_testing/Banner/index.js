import React from 'react'
import Navlink from '../../../components/navlink/navlink'
import style from './banner.scss'

const Banner = () => {
  return (
    <div className={style.banner}>
      <span className={style.banner__text}>
        {'Lorem ipsum sit amet'}
      </span>
      <Navlink href='/projects' className={style.banner__button}>
        {'search project'}
      </Navlink>
      <Navlink href='/create-tender' className={style.banner__button}>
        {'make project tender'}
      </Navlink>
      <span className={style.banner__text}>
        {'Lorem ipsum sit amet'}
      </span>
    </div>
  )
}

export default Banner
