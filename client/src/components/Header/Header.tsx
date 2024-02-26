import React from 'react'
import styles from './Header.module.css'
import NavBar from '../Navbar/Navbar'

export default function Header() : JSX.Element{
  return (
    <header className={`${styles.header}`}>
        <NavBar/>
    </header>
  )
}
