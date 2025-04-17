import React from 'react'
import { ObjectView } from '../../../lib/components/ObjectView'
import { ValueRendererProps } from '../../../lib/components/ObjectView/ObjectView.types.ts'

const demoObject = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Springfield',
    state: 'IL',
    zip: '62701',
  },
  children: [
    { name: 'Jane Doe', age: 5 },
    { name: 'Jim Doe', age: 10 },
  ],
  customSchemaField: 'This field render is defined in the schema',
  functionField: () => {
    return 'This field is a function'
  },
  jsonField: '{"key": "value"}',
}

const demoSchema = {
  customSchemaField: {
    render: ({ value }: ValueRendererProps) => {
      return <span style={{ color: 'red' }}>{value}</span>
    },
  },
  'address.street': {
    render: ({ value }: ValueRendererProps) => {
      return <span style={{ color: 'limegreen' }}>{value}</span>
    },
  },
  'children.{N}.age': {
    render: ({ value }: ValueRendererProps) => {
      return <span style={{ color: 'blue' }}>{value}</span>
    },
  },
}

const ObjectViewDemo = () => {
  return (
    <div>
      <h1>ObjectView Demo</h1>
      <p>
        ObjectView is a component that displays the properties of an object in a tree-like view.
      </p>

      <ObjectView src={demoObject} schema={demoSchema} />
      <pre>{`<ObjectView src={demoObject} schema={demoSchema} />`}</pre>

      <h2>With data type and length enabled</h2>
      <ObjectView src={demoObject} schema={demoSchema} showType={true} showLength={true} />
      <pre>{`<ObjectView src={demoObject} schema={demoSchema} showType={true} showLength={true} />`}</pre>
    </div>
  )
}

export default ObjectViewDemo
