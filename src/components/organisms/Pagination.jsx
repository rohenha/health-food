import Button from '@components/atoms/Button'

export default function Pagination({ page, count, onPageChange }) {
  return (
    <div className="o-pagination">
      {Array.from(Array(count)).map((e, index) => (
        <Button
          key={`p${index}`}
          className={page === index + 1 ? ' -active' : ''}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  )
}
// { page: 1, pageCount: 1, pageSize: 10, total: 0 }
