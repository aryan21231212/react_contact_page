
import React from 'react'
import styles from './Section.module.css'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from '../button/Button';
import { HiMail } from "react-icons/hi";
import girl from '/public/images/girl.svg'

const Section = () => {
  return (
    <div className={styles.big}>
        <div className={styles.baap}>
            <div className={styles.but2}>
               <Button   
                text="VIA SUPPORT CHAT"
                icon={<MdMessage fontSize="24px" />} />
                <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
            </div>
            <div className={styles.btn}>
                <Button 
                isOutline={true} 
                text="VIA EMAIL FORM" 
                icon={<HiMail fontSize="24px" />} />
            </div>
            <div className={styles.input}>
                <label className={styles.name} htmlFor="name">Name</label>
                <input type="text" id='name' />
            </div>
            <div className={styles.input}>
                <label className={styles.email} htmlFor="email">E-Mail</label>
                <input type="email" id='email' />
            </div>
            <div>
                <label className={styles.text} htmlFor="text">TEXT</label>
                <textarea name="" id="text" rows={9} ></textarea>
            </div>
            <div className={styles.btn3}>
                <Button text="SUBMIT"/>
            </div>
        </div>
        <div>
            <img src={girl} alt="" />
        </div>
    </div>
  )
}

export default Section