import React from 'react'

const RadialProgress = ({ percentage }: { percentage: number }) => {
  const radius = 50 // Radius of the circle
  const circumference = 2 * Math.PI * radius // Circumference of the circle
  const offset = circumference - (percentage / 100) * circumference // The offset for the fill

  return (
    <svg width='120' height='120' viewBox='0 0 120 120'>
      {/* Background circle */}
      <circle cx='60' cy='60' r={radius} stroke='#ddd' strokeWidth='10' fill='none' />

      {/* Foreground circle representing the percentage (filled clockwise) */}
      <circle
        cx='60'
        cy='60'
        r={radius}
        stroke='#4CAF50'
        strokeWidth='10'
        fill='none'
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap='round'
        transform='rotate(-90 60 60)' // This rotates the starting point of the stroke
      />

      {/* Center text */}
      <text x='50%' y='50%' textAnchor='middle' dominantBaseline='middle' fontSize='18' fill='#333'>
        {percentage}%
      </text>
    </svg>
  )
}

export default RadialProgress
