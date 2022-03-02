import React from "react";
import Styles from './Paginado.module.css';


export default function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumber = [];
  /*
   * Vamos a pushear al arreglo pageNumber, el número redondeado para arriba, del resultado de dividir todos los personajes por el número de personajes deseados.
   */
  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumber.push(i);
  }
  /*
   * Ahora si tengo 'pageNumber', mapeamos todos los números que contenga el arreglo.
   */
  return (
    <div>
    <nav >
      <ul className={Styles.paginate}>
        {pageNumber &&
          pageNumber.map(number => (
            <li  className={Styles.number} key={number}
            >
              <button className={Styles.btnPaginate} onClick={() => paginado(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </nav>
    </div>
  );
}
