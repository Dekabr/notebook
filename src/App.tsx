import React from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Paper } from '@mui/material'
import { CardsBlog } from './components/CardsBlog'
import { BarBlog } from './components/BarBlog'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={0}>
        <BarBlog />
        <Box sx={{ height: '100vh' }}>
          <CardsBlog />
        </Box>
      </Paper>
    </ThemeProvider>
  )
}

export default App
