import { Sciences } from "./science";
import { Topics } from "./topics";

export interface Problem {
    science: Sciences,
    topic: Topics[],
    content: string,
    restrains?: {
        memory: string,
        time: string
    }
}

export const problems: Problem[] = [
    {
        science: Sciences.Informatics,
        topic: [Topics.Graphs],
        content: 'This is a graphs problem',
        restrains: {
            memory: '1MB',
            time: '100s',
        }
    },
    {
        science: Sciences.Informatics,
        topic: [Topics.Graphs, Topics.Dynamic],
        content: 'this is graphs AND dynamic programming content',
        restrains: {
            memory: '1MB',
            time: '100s',
        }
    }
]