import React from 'react'
import Button from '../../components/Button'
import Layout from '../../components/Layout/Layout'
import Pic404 from './assets/404.png'
import RocketTeam from './assets/teamRocket.png'
import { navigate } from 'hookrouter';
import { linkEnum } from '../../routes';

import s from "./NotFound.module.scss"

const NotFound = () => {
  return (
    <Layout>
    <div className={s.root}>
      <div className={s.wrap}>
        <img className={s.pic404} src={Pic404} alt="404" />
        <img className={s.rocketTeam} src={RocketTeam} alt="" />
      </div>
      <p className={s.title}><span>The rocket team</span> has won this time.</p>
      <div className={s.btn}>
        <Button onClick={() => navigate(linkEnum.HOME)} color='yellow'>
          Return
        </Button>
      </div>
    </div>
    </Layout>
  )
}

export default NotFound