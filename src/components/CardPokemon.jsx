import { Link } from "react-router-dom";

import { useState } from 'react'



function CardPokemon({pokemon}) {

  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => setIsHovered(false)} state={{pokemon}} className="card" to={`pokemon/${pokemon.id}`}>
      <h2 className="name">{pokemon.name}</h2>
      <div className="image">
        <img src={isHovered ? pokemon.sprite : pokemon.spriteBack} className="sprite"  alt={pokemon.name} />
      </div>
    </Link>
  
  )

    
}

export default CardPokemon