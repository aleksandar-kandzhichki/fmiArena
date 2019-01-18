import * as express from 'express';
var router = express.Router();
import competitionsModel from '../models/competitions';

router.get('/api/problems/', (req, res) =>{
    res.send([]);
});

export default router;
