import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import {
  Bookmark,
  // Edit
} from '@mui/icons-material'
import { MenuEmotioanal } from './EmotionalMenu'
import { FC, useState } from 'react'
// import { DialogViewText } from './DialogViewText'
// import { DialogEditText } from './DialogEditText'
import { DialogText } from './DialogText'

interface ICardBlog {
  data: string
  title: string
  text: string
}
export const CardBlog: FC<ICardBlog> = ({ data, title, text }) => {
  const [bookmark, setBookmark] = useState(false)
  return (
    <Card sx={{ maxWidth: '50%' }}>
      <CardHeader
        avatar={<MenuEmotioanal />}
        action={
          // <DialogEditText text={text} title={title} data={data} />
          <DialogText status={'Edit'} text={text} title={title} data={data} />
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardActionArea>
        <CardContent>
          {/*<DialogViewText text={text} title={title} data={data} />*/}
          <DialogText status={'View'} text={text} title={title} data={data} />
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => setBookmark(!bookmark)}
        >
          {bookmark ? <Bookmark color="primary" /> : <BookmarkAddIcon />}
        </IconButton>
      </CardActions>
    </Card>
  )
}
