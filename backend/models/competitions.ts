import { Document, Schema, model } from 'mongoose';
import { ICompetition } from '../../data/ICompetition'

var schema = new Schema({
    competitors: [{
        email: String
    }],
    name: String,
    solutions: [{
        date: Date,
        by: String,
        filePath: String,
        score: Number
    }],
    // Ids of the problems
    problems: [String]
});

export interface ICompetitionsMongoModel extends ICompetition, Document { }
var toExport = model<ICompetitionsMongoModel>('competitions', schema);

export default toExport;