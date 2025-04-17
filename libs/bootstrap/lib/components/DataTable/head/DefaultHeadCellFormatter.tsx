import React from 'react'
import {
  DataTableHeadCellFormatterProps,
  DataTableHeadCellFormatter,
} from '../DataTable.types.ts'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

export const DefaultHeadCellFormatter: DataTableHeadCellFormatter = ({
  col,
  el,
}: DataTableHeadCellFormatterProps) => {
  const setSort = (dir: string) => {
    console.log('sort', col.field, dir)
  }

  let sort

  if (col.sortable) {
    sort = (
      <span className={'table-head-sort'}>
        <span className={'table-head-sort-up'} onClick={() => setSort('ASC')}>
          <FaCaretUp />
        </span>
        <span className={'table-head-sort-down'} onClick={() => setSort('DESC')}>
          <FaCaretDown />
        </span>
      </span>
    )
  }

  return (
    <span className={'table-head'}>
      {col.title}
      {sort}
    </span>
  )
}

export default DefaultHeadCellFormatter
