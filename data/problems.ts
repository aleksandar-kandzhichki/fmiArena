import { Sciences } from "./science";
import { AllTopics } from "./topics";

export interface IProblem {
    science: number,
    topics: AllTopics[],
    content: string,
    restrains?: {
        memory: string,
        time: string
    },
    name: string;
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

export const problems: IProblem[] = [
    {
        science: Sciences.Informatics,
        topics: [AllTopics.Graphs],
        content: 'This is a graphs problem',
        restrains: {
            memory: '1MB',
            time: '100s',
        },
        name: "Graphs Only"
    },
    {
        science: Sciences.Informatics,
        topics: [AllTopics.Graphs, AllTopics.Dynamic],
        content: 'this is graphs AND dynamic programming content',
        restrains: {
            memory: '1MB',
            time: '100s',
        },
        name: "Informatics Graphs & dynamic"
    }
]