import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='Home'>
      <div className='Nav bg-gray-400 text-red-600'>
        This is navbar
      </div>
      <span>This is homepage</span>
    </div>
  )
}
