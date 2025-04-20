import React, { HTMLProps, PropsWithChildren } from 'react'
import './DataTable.scss'
import {
  DataTableCell,
  DataTableCellFormatterProps,
  DataTableHeadCellFormatterProps,
  DataTableColumnDef,
  DataTableProps,
} from './DataTable.types.ts'
import { DefaultCellFormatter } from './cell/DefaultCellFormatter.tsx'
import { DefaultHeadCellFormatter } from './head/DefaultHeadCellFormatter.tsx'

const getRowValue = (row: any, fieldName: string): any => {
  if (fieldName.indexOf('.') > 0) {
    const [_field, _tail] = fieldName.split('.', 2)
    console.log('getRowValue', fieldName, _field, _tail)
    const _data: any = getRowValue(row, _field)
    if (_data) {
      return getRowValue(_data, _tail)
    }
    return undefined
  }
  return row[fieldName] ?? undefined
}

const getRowColumnValue = (row: any, col: DataTableColumnDef) => {
  return col.field ? getRowValue(row, col.field) : undefined
}

interface DataTableRowProps extends HTMLProps<HTMLTableRowElement>, PropsWithChildren<any> {
  idx: number
  row: any
}

export const DataTableRow = ({ idx, row, children, ...rowProps }: DataTableRowProps) => {
  const elRef = React.useRef<HTMLTableRowElement>(null)

  return (
    <tr ref={elRef} key={`row-${idx}`} {...rowProps}>
      {children}
    </tr>
  )
}

export const DataTableHeadCell = ({ col }: { col: DataTableColumnDef }) => {
  const elRef = React.useRef<HTMLTableHeaderCellElement>(null)

  const formatterProps: DataTableHeadCellFormatterProps = {
    col: col,
    el: elRef,
  }

  const Formatter = col?.headerFormatter || DefaultHeadCellFormatter
  const formatted = Formatter(formatterProps)
  return (
    <th ref={elRef} key={col.field}>
      {formatted}
    </th>
  )
}

export const DataTableRowCell = (cell: DataTableCell) => {
  const elRef = React.useRef<HTMLTableDataCellElement>(null)

  const formatterProps: DataTableCellFormatterProps = {
    cell: cell,
    el: elRef,
  }

  //const value = col.field ? row[col.field] : undefined
  const Formatter = cell.col?.formatter || DefaultCellFormatter

  // const formatterProps = { value, row, col, idx }
  // return (
  //   <td key={`cell-${idx}-${col.field}`}>
  //     <Formatter {...formatterProps} />
  //   </td>
  // )

  const formattedValue = Formatter(formatterProps)
  return (
    <td ref={elRef} key={`cell-${cell.rowIdx}-${cell.col.field}`}>
      {formattedValue}
    </td>
  )
}

export const DataTable = ({ columns, data, ...props }: DataTableProps) => {
  const renderHeadCells = () => {
    return columns
      .filter((c) => c?.visible !== false)
      .map((col) => <DataTableHeadCell key={col.field} col={col}></DataTableHeadCell>)
  }

  const renderRowCells = (row: any, idx: number) => {
    const cells = columns
      .filter((c) => c?.visible !== false)
      .map((col) => {
        const value = getRowColumnValue(row, col)

        return (
          <DataTableRowCell
            key={`cell-${idx}-${col.field}`}
            col={col}
            row={row}
            rowIdx={idx}
            value={value}
          ></DataTableRowCell>
        )
      })
    return <>{cells}</>
  }

  const className = React.useMemo(() => {
    const classNames: string[] = []
    classNames.push('boosttbl-table table')

    if (props?.small) {
      classNames.push('table-sm')
    }

    if (props?.striped) {
      classNames.push('table-striped')
    }

    if (props?.hover) {
      classNames.push('table-striped')
    }

    return classNames.join(' ')
  }, [props?.hover, props?.small, props?.striped])

  return (
    <div className={'boosttbl-container'}>
      <table className={className}>
        <thead>
          <tr>{renderHeadCells()}</tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, idx) => {
              const cells = renderRowCells(row, idx)
              return (
                <DataTableRow idx={idx} row={row} key={`row-${idx}`}>
                  {cells}
                </DataTableRow>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
