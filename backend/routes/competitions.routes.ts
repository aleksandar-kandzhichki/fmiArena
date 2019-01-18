import * as express from 'express';

var router = express.Router();

router.get('/api/competitions/', (req, res) => {
    // let data =  competitionsModel.find().lean().exec();
    res.send([]);
});

export default router;
