import { Sciences } from "./science";
import { AllTopics } from "./topics";

export interface IProblemPreview {
    name: string,
    topics: AllTopics[]
}

export interface IProblem extends IProblemPreview {
    science: number,
    content: string,
    restrains?: {
        memory: string,
        time: string
    },
}

export class Problem implements IProblem {
    constructor(problem: IProblem = {} as IProblem) {
        this.science = problem.science || Sciences.Informatics;
        this.topics = problem.topics || [];
        this.content = problem.content || "No content";
        this.restrains = problem.restrains || { memory: undefined, time: undefined };
        this.name = problem.name || 'Unknown';
    }

    science: Sciences;
    topics: AllTopics[];
    content: string;
    restrains?: {
        memory: string,
        time: string
    };
    name: string;
}