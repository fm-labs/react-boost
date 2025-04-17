import React from 'react'
import { DataTableCellFormatterProps, DataTableCellFormatter } from '../DataTable.types.ts'

interface DefaultCellFormatterProps extends DataTableCellFormatterProps {}

export const DefaultCellFormatter: DataTableCellFormatter = ({
  cell,
}: DefaultCellFormatterProps) => {
  const value = cell?.value

  if (value === undefined) {
    return <span className={'table-cell'}>undefined</span>
  } else if (value === null) {
    return <span className={'table-cell'}>null</span>
  } else if (typeof value === 'object') {
    return <span className={'table-cell'}>object</span>
  } else if (typeof value === 'function') {
    return <span className={'table-cell'}>function</span>
  }
  return <span className={'table-cell'}>{value}</span>
}

export default DefaultCellFormatter
