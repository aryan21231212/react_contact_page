import React from 'react'
import styles from './Button.module.css'

export const Button = ({ isOutline, icon, text, ...rest }) => {
  return (

        <button {...rest} className={isOutline?styles.Outline_btn:styles.primary_btn}>
            {icon}
            {text}
        </button>
    
  )
}

