import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './home.module.css';
import Loader from './Loader.gif'

import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getDogs, getTemperament } from '../../actions/actions';

import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import FilterbyAlphabet from '../FilterbyAlphabet/FilterbyAlphabet';
import FilterbyWeight from '../FilterbyWeight/FilterbyWeight';
import FilterbyRaza from '../FilterbyRaza/FilterbyRaza';
import FiltrobyTemperament from '../FiltrobyTemperament/FiltrobyTemperament';

export default function Home() {
    const dispatch = useDispatch();
    const allDogs = useSelector((state)=> state.dogs);
    const [loading, setloading] =useState(true)
    //const temperaments = useSelector ((state)=> state.temperament)
    const [order, setOrder] = useState("")

    //para paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPage] = useState(8);
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
      };


    useEffect(()=>{
        dispatch(getDogs())
        dispatch(getTemperament());
        setTimeout(()=>{
          setloading(false)
        },3000)
    },[])


  return (
    <div>   
        <Nav />
        <div  className={Styles.paginate }>
        <Paginado dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginado={paginado}/>
        </div>
        <FilterbyAlphabet setCurrentPage={setCurrentPage} setOrder={setOrder}/>
        <FilterbyWeight setCurrentPage={setCurrentPage} setOrder={setOrder}/>
        <FilterbyRaza setCurrentPage={setCurrentPage} setOrder={setOrder}/>
        <FiltrobyTemperament  />

        <div className={Styles.cards}>
        {loading ? <img src={Loader} alt="loading"/> :

        <div className={Styles.containerCards}>
        {currentDogs && currentDogs.map((el) => {
            return (
              <Link to={"/dogs/" + el.id}>
                <Card
                  key={el.id}  
                  name={el.name}
                  weight={el.weight}
                  img={el.img ? el.img : el.image}
                  temperament={el.temperament}
                  temperaments={el.temperaments}
                  id={el.id}
                  />
              </Link>
            );
          })}
      </div>
      }
      </div>
    </div>
  )
}
