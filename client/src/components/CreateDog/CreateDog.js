import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperament, postDog } from '../../actions/actions';
import Styles from './CreateDog.module.css'



export const CreateDog =()=> {
    const temperament = useSelector((state)=> state.temperament)
    const dispatch = useDispatch();

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
    
    function handleDelete(e){
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
          <input type="text" name="name"  value={values.name} onChange={ handleChange}  className={Styles.controls} placeholder='Name'/>
           {errors.name && <p className={Styles.error}>{errors.name}</p>} 
        </div> 

        <div>
          <input type="number" name="heightMin" min={1} max={50} value={values.heightMin} onChange={handleChange} autoComplete="off" className={Styles.controls} placeholder='Height min:'/>
           {errors.name && <p className={Styles.error}>{errors.name}</p>} 
        </div>

        <div>
          <input type="number" name="heightMax" value={values.heightMax} min={1} max={50}  onChange={handleChange} autoComplete="off" className={Styles.controls} placeholder='Height max:'/>
        </div>

        <div>
          <input type="number" name="weightMin" value={values.weightMin} min={1} max={50} onChange={handleChange} autoComplete="off" className={Styles.controls} placeholder='Weight min:' />
        </div>

        <div>
          <input type="number" name="weightMax" value={values.weightMax} min={1} max={50} onChange={handleChange} autoComplete="off" className={Styles.controls} placeholder='Weight max: '/>
        </div>

        <div>
          <input type="number" name="years"value={values.years} onChange={handleChange} min={1} max={50} autoComplete="off" className={Styles.controls} placeholder='Life Span :'/>
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
                        <button className={Styles.btndelete} onClick={()=>handleDelete(elem)}>x</button>
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
        {errors ? <h2 className={Styles.error}>Something went wrong!</h2> : null} 


     
    </div>
  )
}

