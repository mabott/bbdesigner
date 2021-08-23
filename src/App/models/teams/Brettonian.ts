import { BASE_UPGRADE_COSTS, TeamType, Position, Normal, Double } from "..";

export const BrettonianLineman: Position = {
    title: 'Brettonian Lineman',
    ma: 6, st: 3, ag: 2, av: 7,
    startingSkills: ['Fend'],
    normal: Normal.G,
    double: Double.ASP,
    cost: 70,
    max: 16,
}

export const BrettonianYeoman: Position = {
    title: 'Brettonian Yeoman',
    ma: 6, st: 3, ag: 3, av: 8,
    startingSkills: ['Wrestle'],
    normal: Normal.GS,
    double: Double.AP,
    cost: 70,
    max: 4,
}

export const BrettonianBlitzer: Position = {
    title: 'Brettonian Blitzer',
    ma: 7, st: 3, ag: 4, av: 8,
    startingSkills: ['Block', 'Dauntless', 'Catch'],
    normal: Normal.GAP,
    double: Double.S,
    cost: 110,
    max: 4,
}

export const Brettonian: TeamType = {
    title: 'Brettonian',
    upgradeCosts: {'Team Reroll': 70, ...BASE_UPGRADE_COSTS},
    positions: [
        BrettonianLineman,
        BrettonianYeoman,
        BrettonianBlitzer,
    ]
}