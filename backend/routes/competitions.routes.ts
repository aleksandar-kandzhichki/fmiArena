import * as express from 'express';
import competitionsModel from '../models/competitions'
import { ICompetition } from '../../data/ICompetition';

var router = express.Router();

router.get('/api/competitions/', async (req, res) => {
    await competitionsModel.insertMany([{ competitors: [], name: "testCompetition", problems: [], solutions: [] } as ICompetition]);
    let data = await competitionsModel.find().lean().exec();
    res.send(data);
});

export default router;
