/**
 * ObjectViewSchema interface
 */
export interface ObjectViewSchema {
  [key: string]: {
    render?: ValueRenderer
  }
}

/**
 * ValueRendererProps interface
 */
export interface ValueRendererProps {
  value: any
  data?: any
}

/**
 * ValueRenderer type
 */
export type ValueRenderer = (props: ValueRendererProps) => JSX.Element
