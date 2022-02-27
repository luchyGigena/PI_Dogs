 const getApiInfo= require('./getApiInfo');
 const getDbInfo = require('./getDbInfo')

 module.exports= async function getAllDogs(){
     let infoApi= await getApiInfo();
     let infoDb = await getDbInfo();
     const allDogs = infoApi.concat(infoDb)
   return allDogs
 }