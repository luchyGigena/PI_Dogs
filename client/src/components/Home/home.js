import React from 'react';
import Nav from '../Nav/Nav';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getDogs } from '../../actions/actions';

export default function Home() {
    const dispatch = useDispatch();
    const allDogs = useSelector((state)=> state.dogs);




    useEffect(()=>{
        dispatch(getDogs())
        console.log(getDogs())
    },[dispatch])








  return (
    <div>   
        <Nav />


    </div>
  )
}
