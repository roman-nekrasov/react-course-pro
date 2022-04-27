import React from 'react'
import Layout from '../../components/Layout/Layout'
import PokemonCard from '../../components/PokemonCard'
import pokemons from './assets/pokemons.ts'

const Pokedex: React.FC = () => {
  return (
    <Layout>
        {pokemons.map((item: any) => ( <div>{item.name_clean}</div>
          
        ))}
    </Layout>
  )
}

export default Pokedex