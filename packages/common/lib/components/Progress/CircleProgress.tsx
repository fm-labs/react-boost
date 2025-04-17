import React from 'react'

const CircleProgress = ({ percentage }: { percentage: number }) => {
  // Set the radius of the circle
  const radius = 50
  const circumference = 2 * Math.PI * radius // Circumference of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference // Calculate stroke dash offset

  return (
    <svg width='120' height='120' viewBox='0 0 120 120'>
      {/* Background circle */}
      <circle cx='60' cy='60' r={radius} stroke='#ddd' strokeWidth='10' fill='none' />

      {/* Foreground circle representing the percentage */}
      <circle
        cx='60'
        cy='60'
        r={radius}
        stroke='#4CAF50'
        strokeWidth='10'
        fill='none'
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap='round'
      />

      {/* Center text */}
      <text x='50%' y='50%' textAnchor='middle' dominantBaseline='middle' fontSize='18' fill='#333'>
        {percentage}%
      </text>
    </svg>
  )
}

export default CircleProgress
