export enum AllTopics {
    LinearAlgebra,
    Calculus,
    Geometry,
    NumberTheory,
    GameTheory,
    OperationsResearch,
    DiscreteMaths,
    Automata,
    Algebra,
    Dynamic,
    Graphs,
    Sorts,
    BasicCoding,
    ProbabilityStatistics,
    Logic,
    Combinatorics
}

export const MathTopics = {
    [AllTopics.LinearAlgebra]: "Linear Algebra",
    [AllTopics.DiscreteMaths]: "Discrete Mathematics",
    [AllTopics.Automata]: "Automata Theory",
    [AllTopics.Algebra]: "Algebra",
    [AllTopics.Calculus]: "Calculus",
    [AllTopics.Geometry]: "Geometry",
    [AllTopics.NumberTheory]: "Number Theory",
    [AllTopics.GameTheory]: "Game Theory",
    [AllTopics.OperationsResearch]: "Operations Research",
    [AllTopics.ProbabilityStatistics]: "Probability & Statistics",
    [AllTopics.Logic]: "Logic",
    [AllTopics.Combinatorics]: "Combinatorics",
}

export const AlogrihmTopics = {
    [AllTopics.Dynamic]: "Dynamic Programming",
    [AllTopics.Graphs]: "Graphs",
    [AllTopics.Sorts]: "Sorting Algorithms",
    [AllTopics.BasicCoding]: "BasicCoding",
}

export const InformaticTopics = {};
Object.assign(InformaticTopics, AlogrihmTopics, {
    [AllTopics.Automata]: "Automata Theory",
})