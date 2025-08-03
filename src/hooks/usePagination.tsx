import { useState, useMemo, useEffect } from 'react'

export function usePagination<T>(items: T[], itemsPerPage: number = 12, maxVisibleButtons: number = 5) {
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [items.length])

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const goToPage = (current: number) => {
    setPage(Math.max(1, Math.min(current, totalPages)))
  }

  const prev = () => goToPage(page - 1)
  const next = () => goToPage(page + 1)

  const paginatedItems = useMemo(() => {
    return items.slice((page - 1) * itemsPerPage, page * itemsPerPage)
  }, [items, page, itemsPerPage])

  const range = useMemo(() => {
    const middle = Math.floor(maxVisibleButtons / 2)
    let start = Math.max(1, page - middle)
    let end = start + maxVisibleButtons - 1

    if (end > totalPages) {
      end = totalPages
      start = Math.max(1, end - maxVisibleButtons + 1)
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }, [page, totalPages, maxVisibleButtons])

  return {
    page,
    totalPages,
    paginatedItems,
    range,
    goToPage,
    prev,
    next
  }
}