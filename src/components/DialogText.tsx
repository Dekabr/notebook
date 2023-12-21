import * as React from 'react'
import { FC } from 'react'
import Dialog from '@mui/material/Dialog'
// import AppBar from '@mui/material/AppBar'
// import Toolbar from '@mui/material/Toolbar'
// import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
// import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
// import { Container } from '@mui/material'
// import { Edit } from '@mui/icons-material'
import { DialogEditText } from './DialogEditText'
import { DialogViewText } from './DialogViewText'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface IFullScreenDialog {
  text: string
  title: string
  data: string
}

export const DialogText: FC<IFullScreenDialog> = ({ text, title, data }) => {
  const [open, setOpen] = React.useState(false)
  const [mode, setMode] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setMode(false)
  }

  return (
    <React.Fragment>
      <Typography
        align="left"
        variant="body2"
        color="text.secondary"
        onClick={handleClickOpen}
      >
        {text}
      </Typography>
      {mode === true ? (
        <>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <DialogEditText
              text={text}
              title={title}
              data={data}
              handleClose={handleClose}
              setMode={setMode}
            />
          </Dialog>
        </>
      ) : (
        <>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <DialogViewText
              text={text}
              title={title}
              data={data}
              handleClose={handleClose}
              setMode={setMode}
            />
          </Dialog>
        </>
      )}
      {/*<Dialog*/}
      {/*  fullScreen*/}
      {/*  open={open}*/}
      {/*  onClose={handleClose}*/}
      {/*  TransitionComponent={Transition}*/}
      {/*>*/}
      {/*  Hello from View*/}
      {/*</Dialog>*/}
      {/*{status === 'Edit' ? (*/}
      {/*  <>*/}
      {/*    <IconButton onClick={handleClickOpen}>*/}
      {/*      <Edit />*/}
      {/*    </IconButton>*/}
      {/*  </>*/}
      {/*) : (*/}
      {/*  <>*/}
      {/*    <Typography*/}
      {/*      align="left"*/}
      {/*      variant="body2"*/}
      {/*      color="text.secondary"*/}
      {/*      onClick={handleClickOpen}*/}
      {/*    >*/}
      {/*      {text}*/}
      {/*    </Typography>*/}
      {/*  </>*/}
      {/*)}*/}
    </React.Fragment>
  )
}
