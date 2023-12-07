import * as React from 'react'
import { FC } from 'react'
import CloseIcon from '@mui/icons-material/Close'
// import { Edit } from '@mui/icons-material'
import VisibilityIcon from '@mui/icons-material/Visibility'
// import { TransitionProps } from '@mui/material/transitions'
import {
  Container,
  TextField,
  Box,
  // Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  // Slide,
} from '@mui/material'
//
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

export const DialogEditText: FC<IFullScreenDialog> = ({
  text,
  title,
  data,
  handleClose,
  setMode,
}) => {
  // const [open, setOpen] = React.useState(false)
  //
  // // const handleClickOpen = () => {
  // //   setOpen(true)
  // // }
  //
  // const handleClose = () => {
  //   setOpen(false)
  // }

  return (
    <React.Fragment>
      {/*<IconButton onClick={handleClickOpen}>*/}
      {/*  <Edit />*/}
      {/*</IconButton>*/}
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
          <IconButton onClick={() => setMode('View')}>
            <VisibilityIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ paddingTop: 10 }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-multiline-flexible"
            label=""
            multiline
            maxRows={20}
            defaultValue={text}
          />
        </Box>
      </Container>
      {/*</Dialog>*/}
    </React.Fragment>
  )
}
