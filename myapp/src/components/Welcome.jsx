import React, { useEffect,useState } from 'react'
import { Typography,Button } from '@mui/material'
const Welcome = () => {
  var [val, setval] = useState()
  const input1 = () => {
    setval("React")
  }
  const input2 = () => {
    setval("Angular")

  }
  const input3 = () => {
    setval("vue")
  }
    //useEffect(()=>{},[]
    useEffect(() => {
      input2()
    }, [])
    return (
      <div>
        <Typography variant='h5'>WELCOME{val}</Typography>
        <Button variant='contained' color='primary' onClick={input1}>React</Button>
        <Button variant='contained' color='secondary' onClick={input2}>Angular</Button>
        <Button variant='contained' color='success' onClick={input3}>vue</Button>
      </div>
    )
  }

export default Welcome