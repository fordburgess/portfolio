import React, { useEffect, useState } from 'react'
import styles from './styles/Loading.module.css'

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
        <div className='h-screen w-screen bg-background-green' id={styles.cover}></div>
    )
  }
}

export default Loading
