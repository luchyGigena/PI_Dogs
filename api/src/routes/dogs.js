const Router = require('express');
const { Dogs , Temperament } = require('../db');
const getAllDogs= require('../InformatioN/getAllDogs');
const router = Router()




router.get('/', async(req, res)=>{
    const { name } = req.query;
    const allperritos= await getAllDogs();
    try {
      if (name) {
        const filtered = allperritos.filter((el) =>
          el.name.toLowerCase().includes(name.toLowerCase())
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




   router.get('/:id', async(req, res)=>{
    
      try{
         const {id} = req.params;
       
        if( id ){
        const allperritos= await getAllDogs();
        const filtered = allperritos.filter((e)=> e.id == id);
        if(filtered.length !== null) return res.status(200).send(filtered);
        return res.status(404).send('ID NOT FOUND')
        }     
    
     }catch(err){
         console.log(err)
          res.status(404).send(err)
      }
   })


   router.post('/createDog', async (req, res)=>{
       const {name, height, weight,lifeSpan, createdInDb ,temperament } = req.body;
        try{
            if(!name || !height || !weight){
                return res.status(400).send('Data Required');
            }else{
                const createDog =await Dogs.create({

                    name,
                    height,
                    weight,
                    lifeSpan,
                    createdInDb
                })
                await createDog.addTemperament(temperament);
                return res.status(200).send('The dog has been successfully created')
            }
        }catch(err){
            console.log(err)
            res.status(400).send(err)
        }
   })


   



module.exports= router;