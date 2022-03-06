import React,{ useEffect }  from 'react';
import { dogsDetail, cleanQ } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

import {useParams,  Link } from 'react-router-dom';
import noimg from './noimg.jpg';
import Nav from '../Nav/Nav';



export default function DetailDogs() {
    const {id} = useParams() //props.match.params.id
    //console.log('trae el id', id)
    const dispatch =useDispatch()
    const detail = useSelector((state)=> state.detail)

    useEffect(()=>{
     
        dispatch(dogsDetail(id))
        //console.log('detalle', id)
    },[dispatch,id])



  return (
    <div>
        <Nav />
       <h1>Dog Detail</h1>
       <div>
            {detail.length > 0 ? (
                <div >
                <div >
                  <img
                    src={detail[0].image ? detail[0]?.image : noimg}
                    alt={`dog ${detail[0]?.name}`}
                    width="400"/>
                </div>
                <div>
                  <h1>{detail[0].name}</h1>
                  <ul>
                    <li>
                       <h4>Height: {detail[0]?.height + " cm"}</h4>
                    </li>
                    <li>
                      <h4>Weight: {detail[0]?.weight + " Kg"}</h4>
                    </li>
                    <li>
                       <h4>Life span: {detail[0]?.lifeSpan}</h4>
                    </li>
                    <li>
                    <h3> Temperaments: </h3>
                    <h4>
                         
                        {detail[0]?.temperament
                          ? detail[0].temperament.map((elem) => elem + ", ")
                          : detail[0]?.temperaments?.map(
                              (elem) => elem.name + ", "
                            )}
                      </h4>
                      <Link to='/home'>
                      <button>Press HERE for go back</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <p>Loading...</p>

            )}

       </div>

    </div>
  )
}
