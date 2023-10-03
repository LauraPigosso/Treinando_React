import React from 'react'
import { useParams } from 'react-router-dom'

const Error = () => {

    let {teste} = useParams();
    console.log(teste)
  return (
    <div>{teste}</div>
  )
}

export default Error