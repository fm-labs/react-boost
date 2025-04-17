import React from 'react'
import { Button, ButtonProps } from 'react-bootstrap'
import { LoadingSpinner } from '../Loading'

export interface SubmitButtonProps extends ButtonProps {
  isSubmitting?: boolean
  submittingIcon?: React.ReactElement
  submittingLabel?: string
}

export function SubmitButton({
  isSubmitting,
  submittingIcon,
  submittingLabel,
  children,
  ...props
}: SubmitButtonProps) {
  submittingLabel = submittingLabel || 'Submitting ...'
  submittingIcon = <LoadingSpinner size={14} />
  isSubmitting = !!isSubmitting

  return (
    <Button type='button' disabled={isSubmitting} {...props}>
      {isSubmitting ? (
        <>
          {submittingIcon} {submittingLabel}
        </>
      ) : (
        children
      )}
    </Button>
  )
}

export default SubmitButton
