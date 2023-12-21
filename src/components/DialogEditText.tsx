import * as React from 'react'
import { FC } from 'react'
import CloseIcon from '@mui/icons-material/Close'
// import { Edit } from '@mui/icons-material'
import VisibilityIcon from '@mui/icons-material/Visibility'
// import { TransitionProps } from '@mui/material/transitions'
// import { DateField } from '@mui/x-date-pickers/DateField'
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
  setMode: (mode: boolean) => void
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
          {/*<TextField label="" defaultValue={title} size="small" />*/}
          <Typography
            sx={{
              ml: 2,
              flex: 1,
              '& .MuiInputBase-input': {
                fontSize: 20,
                lineHeight: 1.6,
              },
            }}
            variant="h6"
            component="div"
          >
            {/*<DateField*/}
            {/*  label="Dash separator"*/}
            {/*  value={'2022-04-17'}*/}
            {/*  format="MM-DD-YYYY"*/}
            {/*/>*/}
            <TextField
              label=""
              defaultValue={title}
              size="small"
              sx={{ width: '25ch' }}
            />

            {/*{data} - {title}*/}
          </Typography>
          <IconButton onClick={() => setMode(false)}>
            <VisibilityIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ paddingTop: 10 }}>
        <Box
          component="form"
          sx={{
            '& .MuiInputBase-input': {
              fontSize: 20,
              lineHeight: 1.6,
            },
            '& .MuiInputBase-root': {
              padding: '18px 8px',
              margin: '0 8px',
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
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
