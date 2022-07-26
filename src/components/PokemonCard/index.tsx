import React from 'react';
import Heading from './../Heading/Heading';
import {pokemonRequest} from './../../types/pokemons'

import s from './PokemonCard.module.scss';

interface IPokemonCardProps  {
    pokemon: pokemonRequest;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({pokemon}) => {
    const {name_clean, stats, img, types} = pokemon;

    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <Heading tag='h6' className={s.titleName}>
                    {name_clean}
                </Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {stats.attack}
                        </div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {stats.defense}
                        </div>
                        Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
                   {types.map(type => (<span className={s.label}>{type}</span>))} 
                </div>
            </div>
            <div className={s.pictureWrap}>
                <img src={img} alt={name_clean} />
            </div>
        </div>
    );
};

export default PokemonCard;
