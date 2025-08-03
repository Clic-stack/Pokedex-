import '../styles/Pagination.css'

interface PaginationProps {
  page: number
  totalPages: number
  range: number[]
  goToPage: (n: number) => void
  prev: () => void
  next: () => void
}

function Pagination({ page, totalPages, range, goToPage, prev, next }: PaginationProps) {
  return (
    <div className="pagination">
      <span className='pagination__legend'>Página {page} of {totalPages}</span>
      <button onClick={prev} disabled={page === 1}>Prev</button>
      {range.map(n => (
        <button key={n} className={n === page ? 'active' : ''} onClick={() => goToPage(n)}>
          {n}
        </button>
      ))}
      <button onClick={next} disabled={page === totalPages}>Next</button>
    </div>
  )
}

export default Pagination