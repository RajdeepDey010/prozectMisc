import { Button, Input } from '@mui/material'
import { useState } from 'react'

function App() {
  const [val, setVal] = useState('')
  const [data, setData] = useState([])
  
  const update = (e)=>{
    e.preventDefault();
    setData([data, ...val]);
    console.log(data);
    setVal('')
  }

  return (
    <div>
      <form  onSubmit={update}>
        <input type='text' onChange={(e)=>setVal(e.target.value)} value={val}/>
        <br />
        <Button type='submit' variant='contained'>Submit</Button>
      </form>
    </div>
  )
}

export default App
