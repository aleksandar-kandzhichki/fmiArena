import * as express from 'express';
import ProblemsModule from '../modules/problems.module';
import { IProblemPreview } from '../../data/problems';
var router = express.Router();

/**
 * Gets only preview of all problems - only name and topics
 */
router.get('/api/problems/', async (_, res) => {
    let problems = await ProblemsModule.getProblems({ name: 1, topics: 1 }) as IProblemPreview[];
    res.json(problems);
});

router.get('/api/problems/:name', async (req, res) => {
    let problem = await ProblemsModule.getProblem({name: req.params.name});
    res.json(problem);
})
export default router;
