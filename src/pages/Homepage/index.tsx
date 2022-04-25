import React from 'react'
import Header from '../../components/Header';

import s from './Home.module.scss';

const Homepage: React.FC = () => {
  return (
    <div className={s.root}>
      <Header />
      some text
    </div>
  )
}

export default Homepage