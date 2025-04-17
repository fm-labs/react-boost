import React from 'react'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  label: string | JSX.Element
  as?: string | React.FC
  children?: any
}

export function Heading({ label, children, as, ...props }: HeadingProps) {
  as = as || 'h3'
  const Tag: React.PropsWithChildren<any> = as

  return (
    <div className='Heading my-3 border-bottom' {...props}>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2'>
        <Tag style={{ margin: 0 }}>{label}</Tag>
        {children}
      </div>
    </div>
  )
}

//export default Heading
