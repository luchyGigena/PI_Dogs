import React from 'react'
import Styles from './search.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchName } from '../../actions/actions';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name , setName] =useState(''); // yo voy a estar guardando lo que tipea el usuario en mi estado local name


  function handleInputChange(e){
    e.preventDefault(e);
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault(e);
    dispatch(searchName(name))
   
  }



  return (


    <div className={Styles.searchBar}>
        <input 
        value={name}
        type='text'
        placeholder='Find your dog'
        onChange={(e)=>handleInputChange(e)}/>
        
        <button type='submit' onClick={(e)=>handleSubmit(e)}>Search</button>
    </div>
  )
}
