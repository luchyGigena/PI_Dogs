 const { Temperament } = require("../db");
const { Dogs } = require("../db");
// //const getApiInfo=require('./getApiInfo')

 module.exports= async function getDbInfo() {
    // let api = await getApiInfo();
    
     return await Dogs.findAll({
         include:{
             model: Temperament,
            attributes: ['name'],
             through:{
                 attributes: [],
             }
            
        }
    })
    
 }