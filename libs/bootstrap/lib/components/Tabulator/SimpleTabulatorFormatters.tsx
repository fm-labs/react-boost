export const MoneyTabulatorCellFormatter = ({
  cell,
  formatterParams,
  onRendered,
}: {
  cell?: any
  formatterParams?: any
  onRendered?: (cell: any) => any[]
}): JSX.Element => {
  const value: string = cell.getValue()

  const amount = parseFloat(value)
  let className = ''
  if (amount < 0) {
    className = 'text-danger'
    //cell.getElement().style.backgroundColor = "rgb(255, 210, 187)";
  } else if (amount > 0) {
    className = 'text-success'
    //cell.getElement().style.backgroundColor = "rgb(219, 247, 211)";
  }

  const el = cell.getElement()
  if (!el.style) {
    el.style = {}
  }
  el.style.textAlign = 'right'
  return <span className={className}>{amount.toFixed(2)}</span>
}

export const PercentageTabulatorCellFormatter = ({
  cell,
  formatterParams,
  onRendered,
}: {
  cell?: any
  formatterParams?: any
  onRendered?: (cell: any) => any[]
}): JSX.Element => {
  const value: string = cell.getValue()

  const amount = parseFloat(value)
  const className = ''
  cell.getElement().style.textAlign = 'right'
  //return `<span class="${className}">${amount.toFixed(0)}%</span>`

  return <span className={className}>{amount.toFixed(0)}%</span>
}
