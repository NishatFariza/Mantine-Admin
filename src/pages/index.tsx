import Head from 'next/head'
import Image from 'next/image'
import TextTest from '../components/Text'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <TextTest />
   </div>
  )
}
