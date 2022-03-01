import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './LandinPage.module.css'


export default function LandinPage() {
  return (
    <div className={Styles.landingPage}>
        <h1 className={Styles.title}>Welcome To Dog's App</h1>
        <Link to='/home'>
        <button className={Styles.btnEnter}>Sing in</button>
        </Link>
        <h3 className={Styles.name} >Lucia Gigena Proyect</h3>
    </div>
  )
}
