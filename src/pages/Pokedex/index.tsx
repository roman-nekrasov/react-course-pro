import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading/Heading'
import Layout from '../../components/Layout/Layout'
import PokemonCard from '../../components/PokemonCard'
import {IPokemons, pokemonRequest} from './../../types/pokemons'
import usePokemons from '../../hooks/useData'

import s from './Pokedex.module.scss'

const Pokedex: React.FC = () => {
  const {  data,
    isLoading,
    isError} = usePokemons<IPokemons>()
 

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Something went wrong!</div>

  // let reg = /as+d/
  console.log(data)

  return (
    <Layout>
<div className={s.bodyWrapper}>
        <Heading tag="h3">{data && data.total} <b>Pokemons</b> for you to choose your favorite</Heading>
          {/* {data?.pokemons.map((item: pokemonRequest) => ( <div key={item.name_clean}>{item.name_clean}</div>))} */}
          <div className={s.pokemonsWrapper}>{data?.pokemons.map((item: pokemonRequest) => (<PokemonCard key={item.id} pokemon={item}/>))}</div>
</div>

    </Layout>
  )
}

export default Pokedex