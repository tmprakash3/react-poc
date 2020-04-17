import OrderController from './controller';

const router = require('express').Router();
// const fs = require('fs');
// const dataPath = './orders.json';
// console.log(dataPath);
console.log("order router");
router.get('/', OrderController.getAllOrders)

export default router;