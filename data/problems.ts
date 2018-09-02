import { Sciences } from "./science";
import { AllTopics } from "./topics";

export interface Problem {
    science: Sciences,
    topics: AllTopics[],
    content: string,
    restrains?: {
        memory: string,
        time: string
    },
    name: string;
}

export const problems: Problem[] = [
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