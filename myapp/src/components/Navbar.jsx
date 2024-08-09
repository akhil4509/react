import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import State from './State'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant='h6'>myapp</Typography>
          <Link to='/signup'>
            <Button variant='contained'>Signup</Button>
            </Link>
          <Link to='/l'>
            <Button variant='contained'>login</Button>
            </Link>
            <Link to='/State'>
            <Button variant='contained'>State</Button>
          </Link>
          <Link to='/W'>
            <Button variant='containd'>Welcome</Button>
          </Link>
          <Link to='/a'>
            <Button variant='containd'>Api</Button>
            </Link>
           </Toolbar>
      </AppBar>
      <br></br><br></br><br></br><br></br><br></br>
    </div>
  )
}

export default Navbar