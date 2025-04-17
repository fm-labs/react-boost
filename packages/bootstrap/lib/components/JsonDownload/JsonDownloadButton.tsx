import React from 'react'
import { Button, ButtonProps } from 'react-bootstrap'
import { FaSave } from 'react-icons/fa'

interface JsonDownloadButtonProps extends ButtonProps {
  json: any,
  fileName?: string
}

const JsonDownloadButton = ({ json, fileName, ...buttonProps }: JsonDownloadButtonProps) => {

  const handleSaveJsonClick = () => {
    const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName ? `${fileName}.json` : 'export.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <Button {...buttonProps} onClick={handleSaveJsonClick}>
        <FaSave /> Download JSON
      </Button>
    </>
  )
}

export default JsonDownloadButton
