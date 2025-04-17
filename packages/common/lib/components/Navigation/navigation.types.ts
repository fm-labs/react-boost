import React, { HTMLProps } from 'react'

export interface IRoutedNavigationItem extends HTMLProps<any> {
  key: string
  label: string
  to: string
  icon?: React.ReactElement /*| React.ElementType*/
}

export interface INavigationItem extends HTMLProps<any> {
  key: string
  label: string
  labelElement?: React.ReactElement
  onClick?: () => void
  icon?: React.ReactElement /*| React.ElementType*/
}
