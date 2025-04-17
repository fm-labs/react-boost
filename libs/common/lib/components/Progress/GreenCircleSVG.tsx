import React from 'react'

const GreenCircleSVG = () => {
  // return (
  //   <svg width="32" height="32" viewBox="0 0 32 32">
  //     <circle cx="16" cy="16" r="16" fill="green" />
  //   </svg>
  // );
  return (
    <svg width='32' height='32' viewBox='0 0 32 32'>
      {/* Background circle (white half) */}
      <circle cx='16' cy='16' r='16' fill='white' />

      {/* Black half of the circle */}
      <circle
        cx='16'
        cy='16'
        r='16'
        fill='none'
        stroke='black'
        strokeWidth='32'
        strokeDasharray='100, 100'
        strokeDashoffset='50'
      />
    </svg>
  )
}

export default GreenCircleSVG
