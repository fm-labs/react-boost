import * as React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { MoreHoriz } from '@mui/icons-material'

type ActionsButtonAction = {
  id: string
  label: string
  onClick: () => void
}

interface ActionButtonProps {
  actions: ActionsButtonAction[]
}

export function ActionsButton({ actions }: ActionButtonProps) {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  // const handleClick = () => {
  //   console.info(`You clicked ${actions[selectedIndex].id}`)
  // }

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    //console.log('Selected IDX', index)
    setSelectedIndex(index)
    setOpen(false)

    actions[index].onClick()
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  return (
    <React.Fragment>
      {/*<ButtonGroup variant='text' ref={anchorRef} aria-label='Button group with a nested menu'>*/}
      {/*<Button onClick={handleClick}>{actions[selectedIndex].label}</Button>*/}
      <Button
        ref={anchorRef}
        size='small'
        aria-controls={open ? 'split-button-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        //aria-label='select merge strategy'
        aria-haspopup='menu'
        onClick={handleToggle}
        variant={'text'}
      >
        <MoreHoriz />
      </Button>
      {/*</ButtonGroup>*/}
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id='split-button-menu' autoFocusItem>
                  {actions.map((action, index) => (
                    <MenuItem
                      key={action.label}
                      //disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {action.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  )
}
