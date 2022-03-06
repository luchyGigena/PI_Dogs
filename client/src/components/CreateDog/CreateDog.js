import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperament, postDog } from '../../actions/actions';




export const CreateDog = () => {
    const temperament = useSelector((state)=> state.temperament)
    const dispatch = useDispatch();
    const [temp , setTemp] = useState([])
    const [errors, setErrors] = useState(false)
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
            setErrors(false)
            alert('Dog Created Success')
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
            setErrors(true)
            setSuccess(false)
        }

    }     



    useEffect(()=>{
        dispatch(getTemperament())
          //console.log('SOY TEMPSTATE DE FORM', getTemperament())
    },[dispatch])


  return (

    <div>
        <Nav />
        <h1>Create Your Dog</h1>
        <form onSubmit={handleSubmit}>

        <div>
          <label>Name: </label>
          <input type="text" name="name" value={values.name} onChange={ handleChange} autoComplete="off"/>
           {errors.name && <p className="error">{errors.name}</p>} 
        </div> 

        <div>
          <label>Height min: </label>
          <input type="number" name="heightMin" value={values.heightMin} onChange={handleChange} autoComplete="off" />
           {errors.name && <p className="error">{errors.name}</p>} 
        </div>

        <div>
          <label>Height max: </label>
          <input type="number" name="heightMax" value={values.heightMax}  onChange={handleChange} autoComplete="off"/>
        </div>

        <div>
          <label>Weight min: </label>
          <input type="number" name="weightMin" value={values.weightMin} onChange={handleChange} autoComplete="off" />
        </div>

        <div>
          <label>Weight max: </label>
          <input type="number" name="weightMax" value={values.weightMax} onChange={handleChange} autoComplete="off"/>
        </div>

        <div>
          <label>Life Span : </label>
          <input type="number" name="years"value={values.years} onChange={handleChange} autoComplete="off"  />
        </div>
        
         <div>
          <label>Temperaments: </label >
          <select onChange={handleSelect} value={values.temperament}  >
            <option value="all">Todos</option>
            {temperament?.map((elem) => (
              <option key={elem.id} value={elem.name}>
                {elem.name}
              </option>
            ))}
          </select>
          {console.log(' eleccion',values.temperament)}
             <div>
                 {
                 values.temperament?.map((elem,i)=>
                    <div key={i}>
                        <h4>{elem}</h4> 
                    </div>)}
            </div>       

        </div> 

        <div>
          <button type="submit">Create!</button>
        </div>
              
        </form>



       {success ? <h2>Created Successfully</h2> : null}
        {errors ? <h2>Something went wrong!</h2> : null} 


        <Link to='/home'>
             <button>Back To Home</button>
        </Link> 
    </div>
  )
}

