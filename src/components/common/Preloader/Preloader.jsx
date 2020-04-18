import React from 'react'
import loading from './Blocks-1s-200px.svg'

const Preloader = () =>{
  return <div style={{width: 200}}><img src= { loading } alt=""/></div>
}

export default Preloader;