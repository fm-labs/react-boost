import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

export const BooleanCellFormatter = ({ cell }: { cell?: any }) => {
  const value = cell.getValue()
  const trueIcon = <FaCheck className={'text-success'} />
  const falseIcon = <FaTimes className={'text-danger'} />
  return value ? trueIcon : falseIcon
}
