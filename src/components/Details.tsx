import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import '../styles/Details.css'

type Types = {
  slot: number,
  type: {
    name: string,
    url: string
  }
}

type Abilities = {
  ability: {
    name: string,
    url: string
  }
  is_hidden: boolean,
  slot: number
}

type Moves = {
  move: {
    name: string,
    url: string
  }
  version_group_details: VersionGroupDetail[]
}

export interface Move {
  name: string,
  url: string
}

export interface VersionGroupDetail {
  level_learned_at: number,
  move_learn_method: {
    name: string,
    url: string
  }
  order: any
  version_group: {
    name: string,
    url: string
  }
}

type Type = string

type Pokemon = {
  id: number,
  name: string,
  types: Type[],
  image: string,
  stats: Stats,
  abilities: string[],
  moves: string[]
}

type Stats = {
  hp: number,
  attack: number,
  defense: number,
  "special-attack": number,
  "special-defense": number,
  speed: number
}

const typeColors: Record<string, string> = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC"
}

const statColors: Record<string, string> = {
  hp: "#FF5959",
  attack: "#F5AC78",
  defense: "#FAE078",
  speed: "#FA92B2",
  "special-attack": "#9DB7F5",
  "special-defense": "#A7DB8D"
}



const baseUrl = 'https://pokeapi.co/api/v2'

function Details() {
  const {name} = useParams()
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    axios.get(`${baseUrl}/pokemon/${name}`)
    .then(res => {
      setPokemon({
        id: res.data.id,
        name: res.data.name,
        types: res.data.types.map((t: Types) => t.type.name),
        abilities: res.data.abilities.map((a: Abilities) => a.ability.name),
        moves: res.data.moves.map((m: Moves) => m.move.name).slice(0, 20), //Para acortar la cantidad de movimientos de los pokemons
        image: res.data.sprites?.other?.["official-artwork"]?.front_default ?? "Image-not-available.png",
        stats: {
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          "special-attack": res.data.stats[3].base_stat,
          "special-defense": res.data.stats[4].base_stat,
          speed: res.data.stats[5].base_stat
        }
      })
    })
  }, [])

  if (!pokemon) return <p>Loading Pokemon...</p>

  const getBackgroundStyle = (types: string[]) => {
  const colors = types.map(t => typeColors[t] || "#444")
  if (colors.length === 1) {
    return { background: colors[0] }
  }
  return {
    background: `linear-gradient(135deg, ${colors.join(", ")})`
  }
}

  const getStatPercentage = (value: number) => {
    const maxStat = 255 // Valor máximo típico en Pokémon base stats
    return `${(value / maxStat) * 100}%`
  }

  return (
    <div className="details" style={getBackgroundStyle(pokemon.types)}>
      <header className="details__header">
        <button className="details__back-button">
          <Link to='/pokedex'>←</Link>
        </button>
      </header>

      <h1 className="details__title">{pokemon.name}</h1>
      <span className="details__id">#{pokemon.id.toString().padStart(4, '0')}</span>
      <img src={pokemon.image} alt={pokemon.name} className="details__image" />

      <div className="details__section details__types">
        <h2>Types</h2>
        {pokemon.types.map(t => <span key={t}>{t}</span>)}
      </div>

      <div className="details__section details__moves">
        <h2>Moves</h2>
        <ol>
          {pokemon.moves.map(m => <li key={m}>{m}</li>)}
        </ol>
      </div>

      <div className="details__section details__abilities">
        <h2>Abilities</h2>
        <ul>
          {pokemon.abilities.map(a => <li key={a}>{a}</li>)}
        </ul>
      </div>

      <div className="details__section details__stats">
        <h2>Stats</h2>
          <ul>
            {Object.entries(pokemon.stats).map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace('-', ' ')}:</strong> {value}
                  <div className="stat-bar">
                    <div
                      className="stat-fill"
                      style={{
                        width: getStatPercentage(value),
                        backgroundColor: statColors[key] || "#ccc"
                      }}
                      >
                      <span className="stat-label">{getStatPercentage(value)}</span>
                    </div>
                  </div>
              </li>
            ))}
          </ul>
      </div>
    </div>

  )
}

export default Details