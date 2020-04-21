const fs = require('fs');
const dataPath = require('./orders.json');

export default {
    getAllOrders: (req, res) => {
        //console.log("getAllOrders called::");
        res.send(dataPath);
        // console.log(res.send(dataPath));
        // fs.readFileSync('./orders.json', 'utf8', (err, data) => {
            
        //     if(err) {
        //         console.log(err);
        //         throw err
        //     }
            
        // }) 

    }
}
