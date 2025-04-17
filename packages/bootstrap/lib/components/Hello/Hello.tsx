import React from 'react'

export const Hello = () => {

  const [count, setCount] = React.useState(0)

  return (
    <div>
      <div style={{fontWeight: "bold"}} onClick={() => setCount(count + 1)}>Hello World!</div>
      <div>{count} times clicked</div>
    </div>
  )
}

export default Hello
