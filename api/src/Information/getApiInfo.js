const axios = require('axios');
// const Dogs = require('../models/Dogs');
// const Temperament = require('../models/Temperament')
const sequelize = require ("sequelize");
const { Dogs , Temperament} = require('../db')

module.exports= async function getApiInfo() {
    
 try{
    const api = await axios.get("https://api.thedogapi.com/v1/breeds");
    const lista = await api.data.map((e)=>{
        return{
            id:e.id,
            name: e.name,
            height: e.height.metric,
            weight: e.weight.metric,
            image: e.image.url,
            lifeSpan: e.life_span,
            temperament: [e.temperament].join().split(',').map((a)=> a.trim())
        }
    })
   
     return lista


}catch(error){
    console.log(error)
}
};





