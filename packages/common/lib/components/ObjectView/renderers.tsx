import { ValueRenderer, ValueRendererProps } from './ObjectView.types.ts'
import { ObjectViewRenderer } from './ObjectView.tsx'

export const NullValueRenderer: ValueRenderer = ({ value }: ValueRendererProps) => {
  return <span className={'entry-value-null'}>[NULL]</span>
}
export const FunctionValueRenderer: ValueRenderer = ({ value }: ValueRendererProps) => {
  return <span className={'entry-value-function'}>[FUNCTION]</span>
}
const SymbolValueRenderer: ValueRenderer = ({ value }: ValueRendererProps) => {
  return <span className={'entry-value-symbol'}>[SYMBOL]</span>
}
export const UndefinedValueRenderer: ValueRenderer = ({ value }: ValueRendererProps) => {
  return <span className={'entry-value-undefined'}>[UNDEFINED]</span>
}
export const BooleanValueRenderer: ValueRenderer = ({ value }: ValueRendererProps) => {
  return <span className={'entry-value-boolean'}>{value ? 'true' : 'false'}</span>
}
export const NumberValueRenderer: ValueRenderer = ({ value }: ValueRendererProps) => {
  return <span className={'entry-value-number'}>{value}</span>
}
export const DateTimeValueRenderer: ValueRenderer = ({ value }: ValueRendererProps) => {
  return <span className={'entry-value-datetime'}>{value}</span>
}
export const StringValueRenderer: ValueRenderer = ({ value }: ValueRendererProps) => {
  return <span className={'entry-value-string'}>{value}</span>
}
export const JsonValueRenderer: ValueRenderer = ({ value }: ValueRendererProps) => {
  const json = JSON.stringify(JSON.parse(value), null, 2)
  return <pre className={'entry-value-json'}>{json}</pre>
}

export const guessRendererFromValue = (val: any): ValueRenderer => {
  const valueType = typeof val
  const valueLength = val ? val.length : 0

  let Renderer = StringValueRenderer
  if (val === null) {
    Renderer = NullValueRenderer
  } else if (valueType === 'undefined') {
    Renderer = UndefinedValueRenderer
  } else if (valueType === 'boolean') {
    Renderer = BooleanValueRenderer
  } else if (valueType === 'number' || valueType === 'bigint') {
    Renderer = NumberValueRenderer
  } else if (valueType === 'function') {
    Renderer = FunctionValueRenderer
  } else if (valueType === 'object') {
    Renderer = ObjectViewRenderer
    //} else if (val.startsWith('arn:')) {
    //  Renderer = ArnValueRenderer
  } else if (typeof val === 'string') {
    if (val.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)) {
      Renderer = DateTimeValueRenderer
    } else if (val.startsWith('https:')) {
      Renderer = StringValueRenderer
    } else if (val.startsWith('http:')) {
      Renderer = StringValueRenderer
    } else if (val.startsWith('arn:')) {
      Renderer = StringValueRenderer
    } else if (val.startsWith('tel:')) {
      Renderer = StringValueRenderer
    } else if (val.startsWith('{') && val.endsWith('}')) {
      Renderer = JsonValueRenderer
    }
  }
  return Renderer
}
