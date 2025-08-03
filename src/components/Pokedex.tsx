import { useEffect, useRef, useState } from "react"
import axios from "axios"
import List from "./List"
import Hero from "./Hero"
import NavBar from "./Navbar"
import '../styles/Pokedex.css'

const defaultType = {
  'ghost': 'Fantasma / Ghost',
  'dark': 'Siniestro / Dark',
  'electric': 'Eléctrico / Electric',
  'normal': 'Normal',
  'fire': 'Fuego / Fire',
  'psychic': 'Psíquico / Psychic',
  'flying': 'Volador / Flying',
  'steel': 'Acero / Steel',
  'poison': 'Veneno / Poison',
  'dragon': 'Dragón / Dragon',
  'water': 'Agua / Water',
  'ice': 'Hielo / Ice',
  'rock': 'Roca / Rock',
  'fighting': 'Lucha / Fighting',
  'grass': 'Planta / Grass',
  'bug': 'Bicho / Bug',
  'ground': 'Tierra / Ground',
  'fairy': 'Hada / Fairy',
}

type Pokemon = {
  name: string,
  url: string
}

type TypeFiltered = {
  pokemon: {
    name: string,
    url: string
  }
  slot: number
}

const baseUrl = 'https://pokeapi.co/api/v2'

function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [typeFiltered, setTypeFiltered] = useState<Pokemon[]>([])
  const [value, setValue] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [showTypes, setShowTypes] = useState<boolean>(false)
  const navBarRef = useRef<HTMLDivElement>(null)
  const scrollToNavBar = () => {
    navBarRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  useEffect(() => {
    axios.get(`${baseUrl}/pokemon?limit=1025`)
    .then(res => {
      setPokemons(res.data.results)
    })
  }, [])

  useEffect(() => {
    if (!type){
      return
    }
    axios.get(`${baseUrl}/type/${type}`)
    .then(res => {
      const filteredNames = res.data.pokemon.map((e: TypeFiltered) => e.pokemon.name)
      setTypeFiltered(pokemons.filter(p => filteredNames.includes(p.name)))
    })
  }, [type])

  const filtered = (type ? typeFiltered : pokemons).filter(p => (
    p.name.toLowerCase().includes(value.toLowerCase())
  ))

  return (
    <div className="Pokedex">
      <Hero scrollToNavBar={scrollToNavBar}/>
      <div ref={navBarRef}>
        <NavBar 
          search={value}
          setSearch={setValue}
          searchPokemon={() => {}}
          setShowTypes={setShowTypes}/>
      </div>

      {showTypes && (
      <div className={`Pokedex__types`}>
        <button
          className="circle-button close-button"
          onClick={() => {
            setShowTypes(false)
            setType('')
          }}
        >
          ❌
        </button>

    {Object.keys(defaultType).map((typeKey) => {
      const key = typeKey as keyof typeof defaultType;
      return (
        <button 
          key={key}
          className={`type-button type--${key} ${type === key ? "active" : ""}`}
          onClick={() => setType(key)}
        >
          {defaultType[key]}
        </button>
      )
    })}
  </div>
)}
      <List pokemons = {filtered}/>
    </div>
  )
}

export default Pokedex