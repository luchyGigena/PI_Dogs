import React from 'react';


import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getDogs, getTemperament } from '../../actions/actions';

import Nav from '../Nav/Nav';
import Card from '../Card/Card';

export default function Home() {
    const dispatch = useDispatch();
    const allDogs = useSelector((state)=> state.dogs);




    useEffect(()=>{
        dispatch(getDogs())
        dispatch(getTemperament())
        //console.log(getDogs())
        //console.log('temperamentos', getTemperament())
    },[])








  return (
    <div>   
        <Nav />
        
    </div>
  )
}
