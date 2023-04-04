import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";

import logo from "../assets/logo.png"

import CardPokemon from "./CardPokemon"

function Home() {

  const [pokemons, setPokemons] = useState([])

  async function getDataPokemon() {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
    const data = await resp.json();
    const pokemonData = await Promise.all (
      data.results.map(async pokemon => {
        const pokemonResp = await fetch(pokemon.url)
        const pokemonInfo = await pokemonResp.json()
        return {
          name: pokemon.name,
          sprite: pokemonInfo.sprites.front_default,
          spriteBack: pokemonInfo.sprites.back_default,
          types: pokemonInfo.types,
          stats: pokemonInfo.stats,
          abilities: pokemonInfo.abilities
        }
      })
    )
    setPokemons(pokemonData)
  }


  useEffect(() => {
    getDataPokemon()
  }, [])


  pokemons.map(pokemon => {
    {pokemon.id = pokemons.indexOf(pokemon)}
  })


  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo do Pokemon" />
      </div>
        <ul className="pokemons">
          {pokemons.map((pokemon) => ( 
            <CardPokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </ul>
    </div>
  )
}

export default Home