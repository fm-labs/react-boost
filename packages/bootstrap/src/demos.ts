import React from 'react'
import AlertsDemo from './components/demos/AlertsDemo.tsx'
import HeadingDemo from './components/demos/HeadingDemo.tsx'
import HelloDemo from './components/demos/HelloDemo.tsx'
import FlyoutDemo from './components/demos/FlyoutDemo.tsx'
import ObjectViewDemo from './components/demos/ObjectViewDemo.tsx'

export type DemoComponent = [string, React.ComponentType]

export const demoComponents: DemoComponent[] = [
  ['Alert', AlertsDemo],
  ['Heading', HeadingDemo],
  ['Hello', HelloDemo],
  ['Flyout', FlyoutDemo],
  ['ObjectView', ObjectViewDemo],
]
