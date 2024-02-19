import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'

const GoodsItem = (props) => {
  const { name, price, poster, setOrder } = props

  return (
    <Grid xs={12} md={4}>
      <Card sx={{height: '100%'}}>
        <CardMedia
          sx={{ height: 140 }}
          image={poster}
          title={name}
          alt={name}
        />
        <CardContent>
          <Typography variant="h6" component="h5">
            {name}
          </Typography>
          <Typography variant="body1" component="h5">
            Цена: {price} руб.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className="btn btn-primary"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default GoodsItem
