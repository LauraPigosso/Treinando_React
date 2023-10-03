import React from 'react'

// import '../../App.css'
import style from "../Styles/header.module.css"


const Header = (props) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1>{props.titulo}</h1>
        <img className={style.banner} src={props.banner} alt="" />
      </div>
    </div>
   
  )
}

export default Header