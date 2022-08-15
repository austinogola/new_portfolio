import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Expertise from '../components/Expertise'
import Contact from '../components/Contact'
import Works from '../components/Works'

export default function Home() {
  return (
    <div className='Home'>

      <Head>
        <title>Austin's Portfoli</title>
        <meta content='Austin Ogola' />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"/>
      </Head>

      <Navbar/>

      <div id="about">
        <About/>
      </div>

      <div id="expertise">
        <Expertise/>
      </div>

      <div id="works">
        <Works/>
      </div>

      <div id="contact">
        <Contact/>
      </div>

      <style jsx>
        {`
          .Home{
            background:#0A192F;
          
          }
        `}
      </style>
    </div>
  )
}
