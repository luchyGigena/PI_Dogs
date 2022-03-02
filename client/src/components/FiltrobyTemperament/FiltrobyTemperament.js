import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterbyTemperament } from '../../actions/actions';
import Styles from './FiltrobyTemperament.module.css'


export default function FiltrobyTemperament() {
    const dispatch = useDispatch()
    const temperaments = useSelector ((state)=> state.temperament);

    function handleFilterTemp(e){
        e.preventDefault()
        dispatch(filterbyTemperament(e.target.value))

    }




  return (
    <select  onChange={(e)=> handleFilterTemp(e)} className={Styles.nameFilter}>
        <option value='ALL'>All Temperaments</option>
        {  temperaments?.map((temp)=>(
                <option value={temp.name} key={temp.id}>{temp.name}</option>
            ))
        }
    </select>
  )
}
