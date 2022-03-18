import React,{ useEffect }  from 'react';
import { dogsDetail} from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './DetailDogs.module.css';
import {useParams,  Link } from 'react-router-dom';
import noimg from './noimg.jpg';
import Nav from '../Nav/Nav';



export default function DetailDogs() {
    const {id} = useParams() //props.match.params.id
    //console.log(' q trae el id', id)
    const dispatch =useDispatch()
    const detail = useSelector((state)=> state.detail)

    useEffect(()=>{
        dispatch(dogsDetail(id))
    },[])



  return (
    <div>
        <Nav />
       <h1>Dog Detail</h1>
       <div className={Styles.cuerpoPagina}>
            {detail.length > 0 ? (
                <div >
                <div className={Styles.cuerpoTarjeta} >
                  <img
                    src={detail[0].image ? detail[0]?.image : noimg}
                    alt={`dog ${detail[0]?.name}`} 
                    className={Styles.imagen}/>
                
                    <p>{detail[0].name}</p>
                    <p>Height: {detail[0]?.height + " cm"}</p>
                     <p>Weight: {detail[0]?.weight + " Kg"}</p>
                    <p>Life span: {detail[0]?.lifeSpan }</p>
                    
                    <p>Temperaments: </p>
                    <p>
                         
                        {detail[0]?.temperament
                          ? detail[0].temperament.map((elem) => elem + ", ")
                          : detail[0]?.temperaments?.map(
                              (elem) => elem.name + ", ")}
                      </p>
                     
                </div>
                </div>
             
            ) : (
              <p>Loading...</p>

            )}

       </div>
       <Link to='/home' >
        <button className={Styles.link}>Press HERE for go back</button>
       </Link>

    </div>
  )
}
