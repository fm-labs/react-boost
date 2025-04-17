import React, { useEffect } from 'react'
import { ReactTabulator } from 'react-tabulator'
import './TabulatorTable.scss'
import { IProps } from 'react-tabulator/lib/ConfigUtils'

export interface TabulatorTableProps extends IProps {
  tableRef?: React.RefObject<any>
  className?: string
}

export function TabulatorTable({ tableRef, className, ...props }: TabulatorTableProps) {
  const ref = tableRef || React.createRef()

  // make sure 'tabulator' is included in custom className attribute
  className = className ? [className, 'tabulator'].join(' ') : className

  const tabulatorProps: any = {
    ref: ref,
    className: className,
    ...props,
  }

  useEffect(() => {
    const listener = () => {
      if (ref && ref.current && ref.current.table) {
        console.log('Redraw table')
        ref.current.table.redraw()
      }
    }
    console.log('Attaching resize listener')
    window.addEventListener('resize', listener)

    return () => {
      console.log('Detaching resize listener')
      window.removeEventListener('resize', listener)
    }
  }, [ref])

  return <ReactTabulator {...tabulatorProps} />
}

export default TabulatorTable
