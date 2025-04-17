import './ObjectView.scss'
import { ObjectViewSchema, ValueRenderer, ValueRendererProps } from './ObjectView.types'
import {
  BooleanValueRenderer,
  DateTimeValueRenderer,
  FunctionValueRenderer,
  guessRendererFromValue,
  JsonValueRenderer,
  NullValueRenderer,
  NumberValueRenderer,
  StringValueRenderer,
  UndefinedValueRenderer,
} from './renderers.tsx'

interface ObjectViewProps {
  src: object
  schema?: ObjectViewSchema
  showType?: boolean
  showLength?: boolean
}

export const ObjectView = ({ src, schema, showType, showLength }: ObjectViewProps) => {
  const renderObject = (o: object, path: string = '') => {
    return Object.entries(o).map((entry) => {
      return renderEntry(entry, path)
    })
  }

  const renderEntry = (entry: [string, any], path: string) => {
    const label = entry[0]
    const val = entry[1]
    const path0 = path ? path + '.' + label : label

    // find the renderer for the value
    let Renderer: ValueRenderer | null = null
    if (schema) {
      const schemaPath = path0.replace(/\.\d+/g, '.{N}')
      //console.log('Lookup schema for path:', path0, schemaPath, schema)
      const schemaEntry = schema[schemaPath]
      if (schemaEntry) {
        Renderer = schemaEntry?.render || null
      }
    }

    if (val !== null && typeof val === 'object') {
      return (
        <div className={'entry entry-nested'} key={label}>
          <div className={'entry-label'} title={`Path: ${path0}`}>
            {label}{' '}
            {showType && (
              <span className={'entry-type'}>{Array.isArray(val) ? 'array' : 'object'}</span>
            )}
            {showLength && <span className={'entry-length'}>{val.length}</span>}
          </div>

          <div className={'entry-value'}>{renderObject(val, path0)}</div>
        </div>
      )
    }

    return (
      <div className={'entry'} key={label}>
        <div className={'entry-label'} title={`Path: ${path0}`}>
          {label}
        </div>
        <div className={'entry-value'}>{renderEntryValue(val, Renderer)}</div>
      </div>
    )
  }

  const renderEntryValue = (val: any, Renderer: ValueRenderer | null = null) => {
    const valueType = typeof val
    const valueLength = val ? val.length : 0

    if (!Renderer) {
      // Renderer = StringValueRenderer
      // if (val === null) {
      //   Renderer = NullValueRenderer
      // } else if (valueType === 'undefined') {
      //   Renderer = UndefinedValueRenderer
      // } else if (valueType === 'boolean') {
      //   Renderer = BooleanValueRenderer
      // } else if (valueType === 'number' || valueType === 'bigint') {
      //   Renderer = NumberValueRenderer
      // } else if (valueType === 'function') {
      //   Renderer = FunctionValueRenderer
      // } else if (valueType === 'object') {
      //   Renderer = ObjectViewRenderer
      //   //} else if (val.startsWith('arn:')) {
      //   //  Renderer = ArnValueRenderer
      // } else if (typeof val === 'string') {
      //   if (val.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)) {
      //     Renderer = DateTimeValueRenderer
      //   } else if (val.startsWith('https:')) {
      //     Renderer = StringValueRenderer
      //   } else if (val.startsWith('http:')) {
      //     Renderer = StringValueRenderer
      //   } else if (val.startsWith('arn:')) {
      //     Renderer = StringValueRenderer
      //   } else if (val.startsWith('tel:')) {
      //     Renderer = StringValueRenderer
      //   } else if (val.startsWith('{') && val.endsWith('}')) {
      //     Renderer = JsonValueRenderer
      //   }
      // }
      Renderer = guessRendererFromValue(val)
    }

    const renderedValue = Renderer({ value: val })

    return (
      <>
        {showType && <span className={'entry-type'}>{valueType}</span>}
        {showLength && <span className={'entry-length'}>{valueLength}</span>}
        <>{renderedValue}</>
      </>
    )
  }

  return (
    <div className={'pretty-object'}>
      <div className={'pretty-object-renderer'}>{renderObject(src)}</div>
      <pre className={'pretty-object-debug'}>{JSON.stringify(src, null, 2)}</pre>
    </div>
  )
}

export const ObjectViewRenderer: ValueRenderer = ({ value }: ValueRendererProps) => {
  return <ObjectView src={value} />
  //return <div className={'entry-value-json'}>{json}</div>
}

// const ArnValueRenderer: ValueRenderer = ({ val }: ValueRendererProps) => {
//   return (
//     <span className={'entry-value-arn'}>
//       <Link to={`/aws/resource?arn=${val}`}>{val}</Link>
//     </span>
//   )
// }

//export default ObjectView
