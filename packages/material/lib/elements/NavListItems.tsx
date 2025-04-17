import React from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { INavigationItem } from '@react-boost/common'

interface NavListItemsProps {
  items: INavigationItem[]
}

export const NavListItems = ({ items }: NavListItemsProps) => {
  return (
    <>
      {items.map((item, index) => {
        let Icon: React.ReactElement | null = null
        if (item.icon) {
          Icon = item.icon
        }
        return (
          <ListItemButton key={index} onClick={item?.onClick}>
            <ListItemIcon>
              {Icon}
            </ListItemIcon>
            <ListItemText primary={item.label} /*secondary={resolvedPath}*/ />
          </ListItemButton>
        )
      })}
    </>
  )
}
