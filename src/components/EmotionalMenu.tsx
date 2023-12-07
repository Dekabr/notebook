import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import { grey } from '@mui/material/colors'
import { FC, useState } from 'react'

const options = ['😆', '😆', '🤔', '🥰', '🤪']

const ITEM_HEIGHT = 38
export const MenuEmotioanal: FC = ({}) => {
  const [emotionalStatus, setEmotioanalStatus] = useState('🤔')
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div style={{ marginRight: -16 }}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar
          sx={{
            width: 35,
            height: 35,
            bgcolor: grey[900],
            fontSize: 35,
          }}
        >
          {emotionalStatus}
        </Avatar>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 30,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '8.5ch',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            selected={option === 'Pyxis'}
            onClick={() => {
              setEmotioanalStatus(option)
              handleClose()
            }}
          >
            <Avatar
              sx={{
                width: 35,
                height: 35,
                bgcolor: grey[900],
                fontSize: 35,
              }}
            >
              {option}
            </Avatar>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
