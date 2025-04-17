import React, { RefObject } from 'react'
import { Button, ButtonGroup, ButtonProps, Dropdown } from 'react-bootstrap'

export interface TableGroupBy {
  label: string
  groups: string[]
}

export interface TableGroupByDropdownButtonProps extends ButtonProps {
  tableRef: RefObject<any>
  groups: TableGroupBy[]
}

export const TableGroupByDropdownButton = ({
  tableRef,
  groups,
  variant,
  size,
  ...btnProps
}: TableGroupByDropdownButtonProps) => {
  groups = groups || []
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
          Group by
        </Button>
        <Dropdown.Toggle split variant={variant} id='table-groupby-dropdown-split' />
        <Dropdown.Menu>
          {groups.map((group, idx) => (
            <Dropdown.Item
              key={`table-groupby-${idx}`}
              onClick={() => {
                tableRef?.current?.setGroupBy(group.groups)
              }}
            >
              {group.label}
            </Dropdown.Item>
          ))}

          <Dropdown.Divider></Dropdown.Divider>
          <Dropdown.Item
            onClick={() => {
              tableRef?.current?.setGroupBy([])
            }}
          >
            Reset groups
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default TableGroupByDropdownButton
