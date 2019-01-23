import defaultProblemsModel, { IProblemMongoModel } from "../models/problems.model";
import { Model } from "mongoose";
import { IProblem } from "../../data/problems";

class ProblemsModule {
    problemsModel: Model<IProblemMongoModel>
    constructor(problemsModel: Model<IProblemMongoModel>) {
        this.problemsModel = problemsModel || defaultProblemsModel;
    }

    getProblem(query: Object) {
        return this.problemsModel.findOne(query).lean().exec();
    }

    getProblems(projection = {}): Promise<IProblem[]> {
        return this.problemsModel.find({}, projection).lean().exec();
    }

    addProblem(problem: IProblemMongoModel) {
        return this.problemsModel.update({ _id: problem.id }, problem, { upsert: true });
    }
}

export default new ProblemsModule(defaultProblemsModel);