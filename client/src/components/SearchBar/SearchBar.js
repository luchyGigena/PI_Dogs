import React from 'react'
import Styles from './search.module.css'

export default function SearchBar() {



  return (


    <div className={Styles.searchBar}>
        <input value=''
        type='text'
        placeholder='Find your dog' />
        
        <button type='submit'>Search</button>
    </div>
  )
}
