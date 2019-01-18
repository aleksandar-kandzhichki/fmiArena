import * as express from 'express';
var router = express.Router();

router.get('/api/problems/', (req, res) =>{
    res.send([]);
});

export default router;
