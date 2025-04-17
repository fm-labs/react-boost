import React, { RefObject } from 'react'
import { Button, ButtonGroup, ButtonProps, Dropdown } from 'react-bootstrap'

export interface TableFilter {
  label: string
  filters: TabulatorFilter[]
  clear?: boolean
}

export interface TabulatorFilter {
  field: string
  type: string
  value: any
}

export interface TableFilterDropdownButtonProps extends ButtonProps {
  tableRef: RefObject<any>
  filters: TableFilter[]
}

export const TableFilterDropdownButton = ({
  tableRef,
  filters,
  size,
  variant,
  ...btnProps
}: TableFilterDropdownButtonProps) => {
  filters = filters || []
  variant = variant || 'outline-secondary'
  size = size || 'sm'
  const defaultBtnProps: ButtonProps = {
    size: size,
    variant: variant,
  }
  return (
    <>
      <Dropdown as={ButtonGroup} size={size}>
        <Button {...defaultBtnProps} {...btnProps}>
          Filters
        </Button>
        <Dropdown.Toggle split variant={variant} id='table-filters-dropdown-split' />
        <Dropdown.Menu>
          {filters.map((filter, idx) => (
            <Dropdown.Item
              key={`table-filters-${idx}`}
              onClick={() => {
                tableRef?.current?.clearFilter(true)
                tableRef?.current?.setFilter(filter.filters)
                tableRef?.current?.refreshFilters()
              }}
            >
              {filter.label}
            </Dropdown.Item>
          ))}

          <Dropdown.Divider></Dropdown.Divider>
          <Dropdown.Item
            onClick={() => {
              tableRef?.current?.clearFilter(true)
              tableRef?.current?.refreshFilters()
            }}
          >
            Reset filters
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              const filter = tableRef?.current?.getFilters(true)
              console.log('FILTER', filter, tableRef?.current)
            }}
          >
            Show filters in console
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default TableFilterDropdownButton
