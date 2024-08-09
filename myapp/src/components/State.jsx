import { Button,TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
  var [val, setval] = useState("akhil")
  var [name, setname] = useState()

  const handleinput = (e) => {
    setval(e.target.value)
    console.log(e.target.value)

  }
  const submit = () => {
    setname(val)
    
  }
  return (
   <div> 
      <Typography variant='h2' gutterBottom>WELCOME {name}</Typography><br></br>
      <TextField id='outlined' label="enter your name" onChange={handleinput}></TextField><br></br>
      <Button variant='contained' onClick={submit}>SUBMIT</Button>
    </div>
  )
}

export default State