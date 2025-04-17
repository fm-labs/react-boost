import React, { PropsWithChildren } from 'react'
import DemoNavigationMenu from './DemoNavigationMenu.tsx'
import DemoContextProvider from './DemoContextProvider.tsx'
import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'

const DemoLayout = (props: PropsWithChildren<any>) => {
  return (
    <DemoContextProvider>
      <header style={{ borderBottom: '1px solid gray' }}>
        <div>
          <a href='https://vitejs.dev' target='_blank'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
          <span>react-boost-bootstrap demo</span>
        </div>
      </header>
      <div className={'DemoLayout'}>
        <div className={'DemoSidebar'}>
          <DemoNavigationMenu />
        </div>
        <div className={'DemoContent'}>{props.children}</div>
      </div>
    </DemoContextProvider>
  )
}

export default DemoLayout
