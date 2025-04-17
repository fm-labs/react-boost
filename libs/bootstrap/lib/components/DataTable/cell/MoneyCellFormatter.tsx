import React from 'react'
import { DataTableCellFormatterProps, DataTableCellFormatter } from '../DataTable.types.ts'

export const MoneyCellFormatter: DataTableCellFormatter = ({
  cell,
  el,
}: DataTableCellFormatterProps) => {
  const value = cell?.value

  if (value === undefined) {
    return <span className={'table-cell'}>undefined</span>
  }

  const amount = parseFloat(value)
  let className = ''
  if (amount < 0) {
    className = 'text-danger'
    //cell.getElement().style.backgroundColor = "rgb(255, 210, 187)";
  } else if (amount > 0) {
    className = 'text-success'
    //cell.getElement().style.backgroundColor = "rgb(219, 247, 211)";
  }

  el.current?.style.setProperty('text-align', 'right')

  return <span className={className}>{amount.toFixed(2)}</span>
}

export default MoneyCellFormatter
