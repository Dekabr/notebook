import * as React from 'react'
import { FC } from 'react'
// import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
// import Slide from '@mui/material/Slide'
// import { TransitionProps } from '@mui/material/transitions'
import { Container } from '@mui/material'
import { Edit } from '@mui/icons-material'

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement
//   },
//   ref: React.Ref<unknown>,
// ) {
//   return <Slide direction="up" ref={ref} {...props} />
// })

interface IFullScreenDialog {
  text: string
  title: string
  data: string
  handleClose: () => void
  setMode: (mode: string) => void
}

export const DialogViewText: FC<IFullScreenDialog> = ({
  text,
  title,
  data,
  handleClose,
  setMode,
}) => {
  // const [open, setOpen] = React.useState(false)
  //
  // const handleClickOpen = () => {
  //   setOpen(true)
  // }
  //
  // const handleClose = () => {
  //   setOpen(false)
  // }

  return (
    <React.Fragment>
      {/*<Typography*/}
      {/*  align="left"*/}
      {/*  variant="body2"*/}
      {/*  color="text.secondary"*/}
      {/*  onClick={handleClickOpen}*/}
      {/*>*/}
      {/*  {text}*/}
      {/*</Typography>*/}

      {/*<Dialog*/}
      {/*  fullScreen*/}
      {/*  open={open}*/}
      {/*  onClose={handleClose}*/}
      {/*  TransitionComponent={Transition}*/}
      {/*>*/}
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {data} - {title}
          </Typography>
          <IconButton onClick={() => setMode('Edit')}>
            <Edit />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ paddingTop: 10 }}>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          {text}
        </Typography>
      </Container>
      {/*</Dialog>*/}
    </React.Fragment>
  )
}
