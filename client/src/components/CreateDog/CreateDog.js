import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperament, postDog } from '../../actions/actions';
import Styles from './CreateDog.module.css'





function validate(values){
  let error = {};
 // const regexName = /^([a-zA-Z ]+)$/i;

    if(!values.name){
    error.name= 'Raza es requerido';
    }
    if (!values.heightMin) {
      error.heightMin = "Por favor, ingrese la altura mínima";
    }
    if (values.heightMin < 0){
      error.heightMin = "Por favor, ingrese una altura valida";
    }
    if (values.heightMin && values.heightMax && parseInt(values.heightMin) >= parseInt(values.heightMax)) {
      error.height = "La altura máxima debe ser mayor que la altura mínima";
    }
    if (!values.heightMax) {
      error.heightMax = "Por favor, ingrese la altura máxima";
    } 
    if (!values.weightMin || values.weightMin < 0) {
      error.weightMin = "Por favor, ingrese el peso mínimo";
    } 
    if (values.weightMin && values.weightMax && parseInt(values.weightMin) >= parseInt(values.weightMax)) {
      error.weight = "El peso máximo debe ser mayor que el peso mínimo";
    }
    if (!values.weightMax) {
      error.weightMax = "Por favor, ingrese el peso máximo";
    }

  return error
}


export const CreateDog =()=> {
    const temperament = useSelector((state)=> state.temperament)
    const dispatch = useDispatch();
    const [error, setError] =useState({})
   
    const [success, setSuccess] = useState(false)
    const [values , setValues] = useState({
        name:'',
        heightMin:'',
        heightMax:'',
        weightMin: '',
        weightMax: '',
        years:'',
        temperament:[]
    })

    const  handleChange=(e)=>{
        e.preventDefault();
        setValues((values)=>({
            ...values,
            [e.target.name] : e.target.value
        }))
        let inputError = validate({...values,[e.target.name] : e.target.values})
        setError(inputError)
    }


    const handleSelect =(e)=>{
        e.preventDefault();
         setValues((values)=>({
            ...values,
            temperament: [...values.temperament , e.target.value]
        }))}

       
        
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if( values.name && values.heightMax && values.heightMin && values.weightMax && values.weightMin && values.temperament){
            dispatch(postDog(values));
            setSuccess(true)
            //setError(false)
            alert('Dog Created Success')
            setError('')
            setValues({
                name:'',
                heightMin:'',
                heightMax:'',
                weightMin: '',
                weightMax: '',
                years:'',
                temperament:[]
            })
           
        }else{
            alert('DATA REQUIRED')
            setSuccess(false)
        }
    }   
    
    function handleDelete(e){ //para borrar seleccion de temperamentos// filtrame por todo lo qe no sea ese elemento, me devuleve todo sin ese elemento
        setValues({
            ...values,
            temperament: values.temperament.filter(temp => temp !== e)
        })
    }


  


    useEffect(()=>{
        dispatch(getTemperament())
    },[dispatch])


  return (
    <div>
        <Nav />
        <form onSubmit={handleSubmit} className={Styles.form}>
        <h1  className={Styles.h1}>Create Your Dog</h1>

        <div>
          <input type="text" name="name" value={values.name} onChange={handleChange} autoComplete="off"  className={Styles.controls} placeholder='Name'/>
        </div> 
        { error.name && <p className={Styles.error}>{error.name} </p>} 

        <div>
          <input type="number" name="heightMin"  value={values.heightMin} onChange={handleChange} autoComplete="off" className={Styles.controls} placeholder='Height min:'/>
        </div>

        <div>
          <input type="number" name="heightMax" value={values.heightMax}  onChange={handleChange} autoComplete="off" className={Styles.controls} placeholder='Height max:'/>
        </div>
              {error.height && <p className={Styles.error}>{error.height}</p>}
            {error.heightMin && <p className={Styles.error}>{error.heightMin}</p>}
            {error.heightMax && <p className={Styles.error}>{error.heightMax}</p> }

        <div>
          <input type="number" name="weightMin" value={values.weightMin}  onChange={handleChange} autoComplete="off" className={Styles.controls} placeholder='Weight min:' />
        </div>
        <div>
          <input type="number" name="weightMax" value={values.weightMax} onChange={handleChange} autoComplete="off" className={Styles.controls} placeholder='Weight max: '/>
        </div>

             {error.weight && <p className={Styles.error}>{error.weight}</p>}
            {error.weightMin && <p className={Styles.error}>{error.weightMin}</p>}
            {error.weightMax && <p className={Styles.error}>{error.weightMax}</p>}

        <div>
          <input type="number" name="years"value={values.years} onChange={handleChange}  autoComplete="off" className={Styles.controls} placeholder='Life Span :'/>
        </div>
         <div>
          
          <select onChange={handleSelect} value={values.temperament}  className={Styles.nameFilter}>
            <option value="all">Choose Temperament</option>
            {temperament?.map((elem) => (
              <option key={elem.id} value={elem.name}>
                {elem.name}
              </option>
            ))}
          </select>

          {console.log(' eleccion',values.temperament)}
             <div className={Styles.temperamentSelected}>
                 {
                 values.temperament?.map((elem,i)=>
                    <div key={i} className={Styles.temperament}>
                        <h4>{elem}</h4> 
                        <button className={Styles.btndelete} onClick={()=>handleDelete(elem)}>X</button>
                    </div>)}
            </div>       

        </div> 

        <div>
          <button type="submit" className={Styles.nameFilter}>Create!</button>
        </div>
        <Link to='/home'>
             <button className={Styles.nameFilter}>Back To Home</button>
        </Link> 
              
        </form>



         {success ? <h2>Created Successfully</h2> : null}
        {error ? <h2 className={Styles.error}>Something went wrong!</h2> : null} 


     
    </div>
  )
}

