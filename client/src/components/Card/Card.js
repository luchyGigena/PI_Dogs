import React from 'react';
import { Link } from 'react-router-dom';
import imgs from './nofound.jpg';
import Styles from './card.module.css'

export default function Card({ name, img, temperament, temperaments, id }) {


  return (
    <div className={Styles.container}>
        <Link to={`/dogs/${id}`}>
            <img src={img ? img : imgs} alt='perrito' className={Styles.pict} />
            <h3 className={Styles.name}>{name}</h3>
            <u>Temperament</u> <br />
        { temperament
          ? temperament.map((el) => "  " + el + "")
          : temperaments?.map((el) => el.name + ",")}
        </Link>


    </div>
  )
}
