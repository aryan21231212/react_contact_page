import React from 'react'
import styles from './Nav.module.css'
import top from '/public/images/top.png'

const Nav = () => {
  return (

    <div className={styles.flex}>
        <nav className={styles.container}>
        <div >
            <img src={top} alt="" />
        </div>
        <div className={styles.content}>
            <h4>HOME</h4>
            <h4>ABOUT</h4>
            <h4>CONTACT</h4>
        </div>
    </nav>
    </div>
    
  )
}

export default Nav