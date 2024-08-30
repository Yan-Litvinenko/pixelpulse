import { achievementsSort } from '../achievementsSort';
import type { IAchieve } from '../../interfaces/interface.achievements';

const rarity: string[] = ['legendary', 'unusual', 'rare', 'epic'];
const levelRarity: Record<string, number> = {
    unusual: 1,
    rare: 2,
    epic: 3,
    legendary: 4,
};

describe('achievements sort', (): void => {
    const mockAchievements = Array.from({ length: 3 }).map((_, index) => {
        return {
            rarity: rarity[index],
        };
    }) as IAchieve[];
    const mockSortAscending: IAchieve[] = mockAchievements.sort((a, b) => {
        return levelRarity[a.rarity] > levelRarity[b.rarity] ? -1 : 1;
    });

    const mockSortDescending: IAchieve[] = mockAchievements.sort((a, b) => {
        return levelRarity[a.rarity] < levelRarity[b.rarity] ? -1 : 1;
    });

    test('Sort in ascending order', (): void => {
        expect(achievementsSort(mockAchievements)).toEqual(mockSortAscending);
    });

    test('Sort in descending order', (): void => {
        expect(achievementsSort(mockAchievements)).toEqual(mockSortDescending);
    });
});
