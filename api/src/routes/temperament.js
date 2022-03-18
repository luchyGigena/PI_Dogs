const Router = require( 'express');
const apiInfo = require( '../Information/getApiInfo');
const { Temperament , Dogs} = require( '../db' );
const { route } = require('./dogs');
const router = Router()


router.get( '/', async ( req, res ) => {

        const dogsApi = await apiInfo();
        const dogsDb = dogsApi.map( el => el.temperament ).join().split(',')
        const dogsDbTrim = dogsDb.map( el => el.trim())
        //console.log(dogsDbTrim)
        dogsDbTrim.forEach( el => {
            if(el !== '') {
                Temperament.findOrCreate({  /// podre usar un bulkcreate -porque me va a iterar buscando y dependiendo lo que tenga en mi modelo??y lo guardara en bd?
                    where: {
                        name: el
                    }
                })
            }
        })
        
        const allTemperaments = await Temperament.findAll();
        //console.log(allTemperaments)
        return res.status( 200 ).send( allTemperaments )
})










module.exports = router;