const fs = require('fs');
const dataPath = require('./orders.json');
console.log(dataPath);

export default {
    getAllOrders: function(req, res) {
        console.log("getAllOrders called::");
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if(err) {
                console.log(err);
                throw err
            }
            res.send(JSON.parse(data))
        }) 

    }
}
