import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByValue } from '../../actions/actions';
import Styles from './Filter.module.css';


export default function FilterbyAlphabet({setCurrentPage, setOrder}) {
const dispach = useDispatch()



    function handleFilter (e){
        e.preventDefault();
        dispach(filterByValue(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);

    }
  return (
  
        <select onChange ={(e)=>{handleFilter(e)}} name="filterAZ" id="filterAZ" className={Styles.nameFilter}>
        <option selected="true" disabled="disabled">Order A-Z</option>    
        <option value="AZ"> A-Z</option>
        <option value="ZA"> Z-A</option>
        </select>
  
  )
}
