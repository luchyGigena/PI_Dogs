import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByValue } from '../../actions/actions';
import Styles from './Filterbyweight.module.css'

export default function FilterbyWeight ({setCurrentPage, setOrder}) {
    const dispatch = useDispatch();

    function handleChangeFilter(e){
        e.preventDefault();
        dispatch(filterByValue(e.target.value));
        setCurrentPage(1);
        setOrder(`ordenado ${e.target.value}`)
    }



  return (
    <select onChange={(e)=>handleChangeFilter(e)} className={Styles.nameFilter} defaultValue>
        <option selected="true" disabled="disabled"> Order By weigh</option>
        <option value="LESS">Order less weight</option>
        <option value="HIGH">Order higher weight</option>
    </select>
  )
}
