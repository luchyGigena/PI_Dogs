import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import Styles from './Nav.module.css'

export default function Nav() {
  return (
    <div className={Styles.nav}>
      <div className={Styles.contenedor}>
        <Link to='/home' className={Styles.link}>
        <h1>Henry Dogs</h1>
        </Link>
        <Link to="/CreateDog" >
         <button className={Styles.btnEnter}>Create Dog</button>
        </Link>
        <div className={Styles.buscador}>
        <SearchBar />
        </div>
        
        </div>
    </div>
    
  )
};