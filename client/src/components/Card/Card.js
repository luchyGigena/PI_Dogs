import React from 'react';
import { Link } from 'react-router-dom';
import imgs from './nofound.jpg';
import Styles from './card.module.css'

export default function Card({ name, img, temperament, temperaments, id , weight }) { //ESTA CARD ME RENDERIZA LO QUE NECESITO, no necesito traeer estados porque lo hago por props


  return (
    <div className={Styles.container}>
        <Link to={`/dogs/${id}`}>
            <img src={img ? img : imgs} alt='perrito' className={Styles.pict} />
            <h3 className={Styles.name}>{name}</h3>
            <h4>Weight : {weight}</h4>
            <u>They are usually :</u> <br />
        { temperament
          ? temperament.map((el) => "  " + el + " ")
          : temperaments?.map((el) => el.name + ",")}
        </Link>

    </div>
  )
}
