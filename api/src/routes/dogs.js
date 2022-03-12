const Router = require('express');
const { Dogs , Temperament } = require('../db');
const getAllDogs= require('../InformatioN/getAllDogs');
const router = Router();
const { Op } = require('sequelize');
const getDbInfo = require('../InformatioN/getDbInfo');




 router.get('/', async(req, res)=>{
     const { name } = req.query;
     const allperritos= await getAllDogs(); //[{}]
     try {
       if (name) {
         const filtered = allperritos.filter((e) =>
           e.name.toLowerCase().includes(name.toLowerCase())
         );
         if (filtered.length) return res.status(200).send(filtered);
         return res.status(404).send("The breed of dog has not been found");
       }
       return res.status(200).send(allperritos);
     }
     catch(err) {
       console.log(err)
       return res.status(404).json(err)
     }
   })

  // router.get('/', async(req, res)=>{
  //   const name = req.query.name
  //   const allperritos= await getAllDogs(); //[{}]
  //   try{
  //     let hay = await Dogs.findAll()
  //     if(!hay.length) await Dogs.bulkCreate(allperritos)
      
  //   } catch (error){
  //     console.log(error)
  //   }
  //   //si tengo nombre
  //   if(name){
  //     try{
  //       let perro =await Dogs.findAll({
  //         where:{
  //           name:{
  //             [Op.iLike]: '%' + name + '%' //me ignora mayusculas o minusculas
  //           }
  //       }})
  //          return res.status(200).send(perro)
  //     } catch(error){
  //       console.log(error)
  //     }
  //   }else{
  //     res.status(200).send(allperritos)
  //   }
  // })




  router.get('/:id', async(req, res)=>{
      const {id} = req.params;
      try{
          if(id){
           const allperritos= await getAllDogs();
            const filtered = allperritos.filter((e)=> e.id == id);
             if(filtered.length > 0) return res.status(200).send(filtered);
             return res.status(404).send('ID NOT FOUND')
         }     
      }catch(err){
         console.log(err)
         res.status(404).json(err)
       }
    })

 
   router.post('/CreateDog', async (req, res)=>{
       const {name, height, weight,lifeSpan, createdInDb ,temperament } = req.body;
        try{
            if(!name || !height || !weight){
                return res.status(400).send('Data Required');
            }else{
                const createDog = await Dogs.create({

                    name,
                    height,
                    weight,
                    lifeSpan,              
                    temperament
                    
                })
                const dbtemp = await Temperament.findAll({
                  where:{
                    name: temperament ///donde el nombre sea igual al temperamento que le llega por body.
                  }
                })
                await createDog.addTemperament(dbtemp); //requiere def. de la db 
                //console.log('dbtemp',dbtemp) // me lo carga como []
                return res.status(200).send('The dog has been successfully created')
            }
        }catch(err){
            
            res.status(404).json({mje:'no se puede' + err})
        }
   })

  router.delete('/:id', async(req, res)=>{
    const {id} = req.params
     const perroDeleted = await Dogs.destroy({
       where:{
         id: id
       }
     })
     perroDeleted.length ?
       res.status(200).json('borrado: true'):
       res.status(204).json('no se puede eliminar perrito')

  })



module.exports= router; 