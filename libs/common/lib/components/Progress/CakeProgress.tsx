import React from 'react'

const CakeProgress = ({ percentage }: { percentage: number }) => {
  const degrees = 180

  return (
    <svg width='200' height='200' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M 80 80
           A 45 45, 0, 0, 0, 125 125
           L 125 80 Z'
        fill='green'
      />
      <path
        d='M 80 80
           A 45 45, 0, 1, 1, 125 125
           L 125 80 Z'
        fill='blue'
      />
    </svg>
  )
}

export default CakeProgress
