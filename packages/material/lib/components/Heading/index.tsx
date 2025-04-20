import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { TypographyVariant } from '@mui/material'
import Box from '@mui/material/Box'

export interface HeadingProps extends TypographyProps {
  label: string | React.JSX.Element
  as?: string //| React.FC
  children?: any
  containerProps?: any
  showBorder?: boolean
}

export function Heading({
  label,
  children,
  as,
  containerProps,
  showBorder,
  ...props
}: HeadingProps) {
  as = as || 'h6'
  //const Tag: PropsWithChildren<any> = as

  // return (
  //   <div className='Heading my-3 border-bottom' {...props}>
  //     <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2'>
  //       <Tag style={{ margin: 0 }}>{label}</Tag>
  //       {children}
  //     </div>
  //   </div>
  // )

  const defaultContainerProps = {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      borderBottom: showBorder ? '1px solid #e0e0e0' : 'none',
      marginBottom: showBorder ? '1.2rem' : 0,
      verticalAlign: 'middle',
    },
  }
  const finalContainerProps = {
    ...defaultContainerProps,
    ...containerProps,
    style: {
      ...defaultContainerProps.style,
      ...containerProps?.style,
    },
  }

  return (
    <Box {...finalContainerProps}>
      <div>
        <Typography sx={{ py: 1 }} color='primary' variant={as as TypographyVariant} {...props}>
          {label}
        </Typography>
      </div>
      <div>{children}</div>
    </Box>
  )
}
