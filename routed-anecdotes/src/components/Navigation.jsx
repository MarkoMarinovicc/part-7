import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const padding = {
        paddingRight: 5
      }
  return (
    <div>
    <Link to='/' style={padding}>anecdotes</Link>
    <Link to='create-new' style={padding}>create new</Link>
    <Link to='about' style={padding}>about</Link>
  </div>
  )
}

export default Navigation