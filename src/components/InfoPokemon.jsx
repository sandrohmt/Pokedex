import { useLocation, useParams } from "react-router-dom"

import { Link } from "react-router-dom";

import logo from "../assets/logo.png"



function InfoPokemon() {

  const pokemonInfo = useLocation()
  const stats = pokemonInfo.state.pokemon.stats
  const types = pokemonInfo.state.pokemon.types
  const abilities = pokemonInfo.state.pokemon.abilities

  const params = useParams()
  const {id} = params


  return (
    <div className="info">

      <Link className="logo" to={"http://127.0.0.1:5173/"}>
        <img src={logo} alt="Logo do Pokemon" />
      </Link>

      <div className="infoImg">
        <img src={pokemonInfo.state.pokemon.sprite} alt="" />
      </div>

      <ul className="stats">
      {stats.map((item) => (
        <div key={stats.indexOf(item)}> 
          <li > {item.stat.name} </li>
          <li className="baseStat"> {item.base_stat} </li>
        </div>
      ))}
      </ul>

      <ul className="types">
      {types.map((item) => (
        <li key={types.indexOf(item)}> {item.type.name} </li>
      ))}
      </ul>

      <ul className="abilities">
        {abilities.map((item) => (
          <li key={abilities.indexOf(item)}> {item.ability.name} </li>
        ))}
      </ul>
    </div>
  )
}

export default InfoPokemon