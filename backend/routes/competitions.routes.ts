import * as express from 'express';
var router = express.Router();

router.get('/api/competitions/', (req, res) =>{
    res.send([]);
});

export default router;
