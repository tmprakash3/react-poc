import OrderController from './controller';

const router = require('express').Router();

router.get('/orders', (req, res)=>{
    console.log("orders get called::");
    res.send(req.orders);
})

export default router;