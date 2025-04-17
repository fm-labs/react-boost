import React from 'react'

const ArcProgress = ({ percentage }: { percentage: number }) => {
  const radius = 50 // Radius of the arc
  const circumference = 2 * Math.PI * radius // Circumference of the full circle
  const offset = circumference - (percentage / 100) * circumference // The offset to fill the arc

  return (
    <svg width='120' height='120' viewBox='0 0 120 120'>
      {/* Background circle (the arc base) */}
      <circle cx='60' cy='60' r={radius} stroke='#ddd' strokeWidth='10' fill='none' />

      {/* Foreground arc representing the filled percentage */}
      <path
        d={`M 60 60
            m -50 0
            a 50 50 0 1 1 100 0`} // Create the full circle path (arc)
        stroke='#4CAF50' // Color of the filled arc
        strokeWidth='10'
        fill='none'
        strokeDasharray={circumference} // Stroke length of the full circle
        strokeDashoffset={offset} // Adjust to fill according to the percentage
      />
    </svg>
  )
}

export default ArcProgress
