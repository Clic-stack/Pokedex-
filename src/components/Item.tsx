import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Item.css"; 

type Pokemon = {
  id: number;
  name: string;
  types: string[];
  image: string;
  stats: {
    name: string;
    base_stat: number;
  }[];
};

type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

function Item({ url }: { url: string }) {
  const [pokemon, setPokemon] = useState<null | Pokemon>(null);

  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemon({
        id: res.data.id,
        name: res.data.name,
        types: res.data.types.map((t: Type) => t.type.name),
        image:
          res.data.sprites?.other?.["official-artwork"]?.front_default ??
          "Image-not-available.png",
        stats: res.data.stats.map((s: any) => ({
          name: s.stat.name,
          base_stat: s.base_stat,
        })),
      });
    });
  }, [url]);

  if (!pokemon) return <p>Loading...</p>;

  const mainType = pokemon.types[0];
  const cardClass = `pokecard type--${mainType}`;

  return (
    <div className={cardClass}>
      <div className="pokecard__header" >
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="pokecard__header-img"
        />
      </div>

      <div className="pokecard__body">
        <h2 className="pokecard__body-name">{pokemon.name}</h2>
        <p className="pokecard__body-types">
          {pokemon.types.map((t) => (
            <span key={t} className="pokecard__body-types-label">
              {t}
            </span>
          ))}
        </p>
      </div>

      <div className="pokecard__stats">
        {["hp", "attack", "defense", "speed"].map((statKey) => {
          const stat = pokemon.stats.find((s) => s.name === statKey);
          return (
            <div key={statKey} className="pokecard__stats-item">
              {statKey.toUpperCase()}
              <span>{stat?.base_stat ?? "?"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Item;
