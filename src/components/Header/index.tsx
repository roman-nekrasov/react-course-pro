import React from 'react'

import s from './Header.module.scss'

import {ReactComponent as LogoSvg} from './assets/Logo.svg'


interface menu {
    id: number; 
    value: string;
    link: string
  };

const MENU: menu[] = [
  {
    id: 1,
    value: "Home",
    link: "#"
  },
  {
    id: 2,
    value: "Pokédex",
    link: "#"
  },
  {
    id: 3,
    value: "Legendaries",
    link: "#"
  },
  {
    id: 4,
    value: "Documentation",
    link: "#"
  },
]

const Header: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div  className={s.logo}>
          <LogoSvg />
        </div>
          <ul className={s.menu}>
            {MENU.map(({id, value, link} )=> (<li className={s.menu__item} key={id}><a href={link}>{value}</a></li>))}
          </ul>
        </div>
    </div>
  )
}

export default Header