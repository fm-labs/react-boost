import React, { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import PersonIcon from '@mui/icons-material/Person'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import { INavigationItem } from '@react-boost/common'

const paperProps = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
}

interface DashboardLayoutAppBarAccountButtonProps extends PropsWithChildren<any> {
  menuItems?: INavigationItem[]
  secondaryMenuItems?: INavigationItem[]
}

export const DashboardLayoutAppBarAccountButton = (props: DashboardLayoutAppBarAccountButtonProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleItemClick = (item: INavigationItem) => {
    if (item?.onClick) {
      item.onClick()
    } else {
      console.log('No onClick handler for item:', item)
    }
    handleClose()
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title='Account settings'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar>
              <PersonIcon />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{ paper: paperProps }}
        //PaperProps={}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {props.menuItems?.map((item, index) => {
          return <MenuItem key={item.key} onClick={() => handleItemClick(item)}>
            {item?.icon} {item?.labelElement || item?.label || item?.key || 'Unknown'}
          </MenuItem>
        })}
        <Divider />
        {props.secondaryMenuItems?.map((item, index) => {
          return <MenuItem key={item.key} onClick={() => handleItemClick(item)}>
            {item?.icon && <ListItemIcon>
              {item?.icon}
            </ListItemIcon>}
            {item?.labelElement || item?.label || item?.key || 'Unknown'}
          </MenuItem>
        })}

        {/* Render children */}
        {props?.children}
      </Menu>
    </>
  )
}
