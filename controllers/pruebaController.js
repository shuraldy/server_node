const queryController = require("./queryController");


const pruebaController = {
    prueba1 : (req, res) =>{

        res.send("Hola soy controlador").end();
    },
    pruebaquery : async (req, res) =>{

        // console.log(req);
        const query1Response = await queryController["query1"]();
        return res.status(200).json({query1Response})
        // console.log(`Response : ${query1Response}`);
    }
    
}

module.exports = pruebaController;