import React, { useEffect, useState } from 'react'

import s from './Parallax.module.scss'

import PocketBallSmall from './assets/PokeBall1.png'
import PocketBallBig from './assets/Pokeball2.png'
import Cloud1 from './assets/CloudSmall.png'
import Cloud2 from './assets/CLoudBig.png'
import Pikachu from './assets/Pikachu.png'

const Parallax: React.FC = () => {
    const [screenX, setScreenX] = useState(0);
    const [screenY, setScreenY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setScreenX(event.screenX);
            setScreenY(event.screenY);
        }
        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])
    

  return (
    <div className={s.root}>
        <div className={s.pocketBallSmall}
        style={{transform: `translate(${screenX * 0.04}px, ${screenY * 0.04}px )`}}
        >
            <img src={PocketBallSmall} alt="Pocketball image" />
        </div>
        <div className={s.pocketBallBig}
        style={{transform: `translate(${screenX * 0.03}px, ${screenY * 0.02}px )`}}
        >
            <img src={PocketBallBig} alt="Pocketball image" />
        </div>
        <div className={s.cloud1}
        style={{transform: `translate(${screenX * 0.01}px, ${screenY * 0.02}px )`}}
        >
            <img src={Cloud1} alt="Cloud image" />
        </div>
        <div className={s.cloud2}
        style={{transform: `translate(${screenX * 0.02}px, ${screenY * 0.03}px )`}}
        >
            <img src={Cloud2} alt="Cloud image" />
        </div>
        <div className={s.pikachu}
        style={{transform: `translate(${screenX * 0.03}px, ${screenY * 0.03}px )`}}
        >
            <img src={Pikachu} alt="Pikachu image" />
        </div>
    </div>
  )
}

export default Parallax