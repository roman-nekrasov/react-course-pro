import React from 'react'
import { A, usePath } from 'hookrouter'
import {ReactComponent as LogoSvg} from './assets/Logo.svg'

import { GENERAL_MENU } from '../../routes'

import cn from 'classnames'
import s from './Header.module.scss'




const Header: React.FC = () => {
  const path = usePath();

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div  className={s.logo}>
          <LogoSvg />
        </div>
          <ul className={s.menu}>
            {GENERAL_MENU.map(({title, link} )=> (
              <li className={cn(s.menu__item, {[s.activeLink]: path === link})} key={title}>
                 <A href={link}>{title}</A>
              </li>))}
          </ul>
        </div>
    </div>
  )
}

export default Header