const Router = require( 'express');
const apiInfo = require( '../Information/getApiInfo');
const { Temperament } = require( '../db' )
const router = Router()


router.get( '/', async ( req, res ) => {

        const dogsApi = await apiInfo();
        const dogsDb = dogsApi.map( el => el.temperament ).join().split(',')
        const dogsDbTrim = dogsDb.map( el => el.trim())
        
        dogsDbTrim.forEach( el => {
            if(el !== '') {
                Temperament.findOrCreate({
                    where: {
                        name: el
                    }
                })
            }
        })

        const allTemperaments = await Temperament.findAll();

        return res.status( 200 ).send( allTemperaments )
})

module.exports = router;