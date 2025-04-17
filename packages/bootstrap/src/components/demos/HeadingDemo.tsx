import React from 'react'
import { Heading } from '../../../lib/components/Heading'

const HeadingDemo = () => {
  return (
    <div>
      <h1>Heading Demo</h1>
      <Heading label={'Heading 1'} as={'h1'}></Heading>
      <Heading label={'Heading 2'} as={'h2'}></Heading>
      <Heading label={'Heading 3'} as={'h3'}></Heading>
      <Heading label={'Heading 4'} as={'h4'}></Heading>
      <Heading label={'Heading 5'} as={'h5'}></Heading>
      <Heading label={'Heading 6'} as={'h6'}></Heading>

      <h1>Heading with Content</h1>
      <Heading label={'Heading 1'} as={'h1'}>
        foo
      </Heading>
    </div>
  )
}

export default HeadingDemo
