import React, { RefObject } from 'react'

export interface DataTableColumnDef {
  title: string
  field?: string
  visible?: boolean
  sortable?: boolean
  formatter?: DataTableCellFormatter

  headerFormatter?: DataTableHeadCellFormatter
}

export interface DataTableProps {
  columns: DataTableColumnDef[]
  data: any[]

  // Bootstrap table props
  small?: boolean
  striped?: boolean
  bordered?: boolean
  hover?: boolean
}

// INSTANCE

// export interface DataTableRow {
//   rowIdx: number
//   data: any
// }

export interface DataTableCell {
  value: any
  row: any
  rowIdx: number
  col: DataTableColumnDef
}

// FORMATTER

export type DataTableHeadCellFormatter = (
  props: DataTableHeadCellFormatterProps,
) => React.ReactNode | string

export interface DataTableHeadCellFormatterProps {
  col: DataTableColumnDef
  el: RefObject<HTMLTableHeaderCellElement | null>
}

export type DataTableCellFormatter = (
  props: DataTableCellFormatterProps,
) => React.ReactNode | string

export interface DataTableCellFormatterProps {
  cell: DataTableCell
  el: RefObject<HTMLTableDataCellElement | null>
}
