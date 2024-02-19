import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

function Header({ handleCart }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          MUI Shop
        </Typography>
        <IconButton color="inherit" onClick={handleCart}>
          <ShoppingBasketIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
