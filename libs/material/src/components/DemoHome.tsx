import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Container from '@mui/material/Container'

const demoComponents: any[][] = []

const DemoHome = () => {
  return (
    <Container>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>react-boost-material</h1>
      <h2>built with Vite + React + MUI</h2>

      <div>
        {demoComponents.map(([name, Component]) => {
          return <Component />
        })}
      </div>
    </Container>
  )
}

export default DemoHome
