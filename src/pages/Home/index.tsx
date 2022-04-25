import React from 'react'
import Header from '../../components/Header';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={s.root}>
      <Header />

      <div className={s.wrap}>
        <div className={s.info}>
          <h1 className={s.info__title}><span className={s.info__title_bold}>Find</span> all your 
            favorite <span className={s.info__title_bold}>Pokemon</span></h1>
          <p className={s.info__text}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => console.log('Button click')}>
        See pokemons
      </Button>
        </div>
        <div className={s.images}>
          <Parallax />
        </div>
      </div>
    </div>
  )
}

export default Home