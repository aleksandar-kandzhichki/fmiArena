import { Document, Schema, model } from 'mongoose';
import { IProblem } from '../../data/problems'

var schema = new Schema({
    science: Number,
    topics: [Number],
    content: String,
    restrains: {
        memory: String,
        time: String
    },
    name: String
});

export interface IProblemMongoModel extends IProblem, Document { }
var toExport = model<IProblemMongoModel>('problems', schema);

export default toExport;