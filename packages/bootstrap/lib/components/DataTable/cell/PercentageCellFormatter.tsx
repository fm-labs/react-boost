import React from 'react'
import { DataTableCellFormatterProps, DataTableCellFormatter } from '../DataTable.types.ts'

export const PercentageCellFormatter: DataTableCellFormatter = ({
  cell,
  el,
}: DataTableCellFormatterProps) => {
  const value = cell?.value

  if (value === undefined) {
    return 'undefined'
  }

  const amount = parseFloat(value)
  const className = ''

  el.current?.style.setProperty('text-align', 'right')

  return <span className={className}>{amount.toFixed(0)}%</span>
}

export default PercentageCellFormatter
