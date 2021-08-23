import { BASE_UPGRADE_COSTS, TeamType, Position, Normal, Double, replacePositionTitle } from "../models";
import { UndeadZombie, UndeadGhoulRunner, UndeadWightBlitzer } from "./Undead";

const rename = replacePositionTitle('Undead', 'Necromantic')

export const NecromanticZombie = rename(UndeadZombie)

export const NecromanticGhoulRunner = rename(UndeadGhoulRunner)

export const NecromanticWightBlitzer = rename(UndeadWightBlitzer)

export const NecromanticFleshGolem: Position = {
    title: 'Necromantic Flesh Golem',
    ma: 4, st: 4, ag: 2, av: 9,
    startingSkills: ['Regeneration', 'Stand Firm', 'Thick Skull'],
    normal: Normal.GS,
    double: Double.AP,
    cost: 110,
    max: 2,
}

export const NecromanticWerewolf: Position = {
    title: 'Necromantic Werewolf',
    ma: 3, st: 5, ag: 1, av: 9,
    startingSkills: ['Claw', 'Frenzy', 'Regeneration'],
    normal: Normal.GA,
    double: Double.SP,
    cost: 120,
    max: 2,
}

export const Necromantic: TeamType = {
    title: 'Necromantic',
    upgradeCosts: {'Team Reroll': 70, ...BASE_UPGRADE_COSTS},
    positions: [
        NecromanticZombie,
        NecromanticGhoulRunner,
        NecromanticWightBlitzer,
        NecromanticFleshGolem,
        NecromanticWerewolf,
    ]
}