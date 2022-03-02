import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCreated } from '../../actions/actions';
import Styles from './FilterbyRaza.module.css';

export default function FilterbyRaza({setCurrentPage, setOrder}) {
    const dispach = useDispatch()


    function handleFrom(e){
        e.preventDefault();
        dispach(filterCreated(e.target.value))
        setCurrentPage(1);
        setOrder(`ordenado ${e.target.value}`)

    }


  return (
    <select onChange={(e)=> handleFrom(e)} className={Styles.nameFilter}>
        <option value='ALL'>All</option>
        <option value='CREATED'>Created</option>
        <option value='API'>Api</option>
    </select>
  )
}
