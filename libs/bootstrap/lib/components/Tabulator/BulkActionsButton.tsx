import React from 'react'
import { ButtonGroup, Dropdown } from 'react-bootstrap'

export interface IBulkaction {
  action: (props: IBulkactionProps) => any
  label: string
  name: string
  params?: any
}

export interface IBulkactionProps {
  name: string
  ids: number[] | string[]
  params?: any
}

interface BulkActionsButtonProps {
  selectedIds: number[]
  actions: IBulkaction[]
  label?: string
  [key: string]: any
}

export const BulkActionsButton = ({
  selectedIds,
  actions,
  label,
  ...props
}: BulkActionsButtonProps) => {
  label = label || `Bulk actions (${selectedIds.length} selected)`
  return (
    <>
      <Dropdown size={'sm'} as={ButtonGroup} {...props}>
        <Dropdown.Toggle variant='outline-primary'>{label}</Dropdown.Toggle>
        <Dropdown.Menu>
          {actions.map(({ label, name, params, action }, idx) => (
            <Dropdown.Item
              key={`${idx}-${name}`}
              onClick={() => action({ name: name, ids: selectedIds, params: params })}
            >
              {label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default BulkActionsButton
