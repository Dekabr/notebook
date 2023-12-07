import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { CardBlog } from './CardBlog'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const cards = [
  {
    data: 'September 14, 2016',
    title: 'Shrimp and Chorizo Paella',
    text:
      ' This impressive paella is a perfect party dish and a fun meal to cook\n' +
      '          together with your guests. Add 1 cup of frozen peas along with the\n' +
      '          mussels, if you like.This impressive paella is a perfect party dish\n' +
      '          and a fun meal to cook together with your guests. Add 1 cup of frozen\n' +
      '          peas along with the mussels, if you like.This impressive paella is a\n' +
      '          perfect party dish and a fun meal to cook together with your guests.\n' +
      '          Add 1 cup of frozen peas along with the mussels, if you like.',
    // emotion: 1,
  },
]

export const CardsBlog = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>
          {cards.map((card, index) => (
            <CardBlog
              data={card.data}
              title={card.title}
              text={card.text}
              key={index}
            />
          ))}
        </Item>
      </Stack>
    </Box>
  )
}
