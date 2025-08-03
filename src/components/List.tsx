import { Link } from "react-router"
import Item from "./Item"
import '../styles/List.css'
import { usePagination } from "../hooks/usePagination"
import Pagination from "./Pagination"

type Pokemon = {
  name: string,
  url: string
}

function List({pokemons}: {pokemons: Pokemon[]}) {
  const {
    page,
    totalPages,
    paginatedItems,
    range,
    goToPage,
    prev,
    next
  } = usePagination(pokemons, 12, 5)

  return (
    <>
      <div className="content">
          {paginatedItems.map(p => (
            <Link key={p.url} to={`/pokedex/${p.name}`} className="content__link">
              <Item url={p.url}/>
            </Link>
          ))}
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        range={range}
        goToPage={goToPage}
        prev={prev}
        next={next}
      />

      {pokemons.length === 0 && <p>Sorry, Pokemons are sleeping, Please try again later</p>}
      
    </>
  )
}

export default List