import React from 'react'
import { DataTableCellFormatterProps, DataTableCellFormatter } from '../DataTable.types.ts'

export const DateCellFormatter: DataTableCellFormatter = ({
  cell,
  el,
}: DataTableCellFormatterProps) => {
  const value = cell?.value

  if (value === undefined) {
    return 'undefined'
  }

  const className = ''

  return <span className={className}>{value}</span>
}

export default DateCellFormatter
