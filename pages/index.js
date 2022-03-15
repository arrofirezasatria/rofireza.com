import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box'
import Footer from '../components/Footer'
import AppBar from '../components/AppBar'

export default function Home() {
  return (
    <div>
      <AppBar />
        
      <main className={styles.main}>
        <h1 className={styles.title}>
          rofireza.io
        </h1>         
      </main>
      
      <Footer />
    </div>
  )
}
