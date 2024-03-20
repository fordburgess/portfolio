import React from 'react'
import styles from "./styles/Lines.module.css"

const Lines = () => {
  return (
    
    <>
        <div className={styles.circle}></div>
        <div className={styles.line} id={styles.line_1}>
            <div className={styles.line} id={styles.line_2}>
                <div className={styles.line} id={styles.line_3}></div>
            </div>
        </div>        
    </>
  )
}

export default Lines
