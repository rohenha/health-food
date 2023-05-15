import { memo } from 'react'
import Button from '@components/atoms/Button'

const Pagination = ({ pageCount, page, onPageChange }) => {
  return (
    <div className="o-pagination">
      {Array.from(Array(pageCount)).map((e, index) => (
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

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.pageCount === nextProps.pageCount &&
    prevProps.page === nextProps.page
  )
}

const PaginationMemo = memo(Pagination, areEqual)
export default PaginationMemo
