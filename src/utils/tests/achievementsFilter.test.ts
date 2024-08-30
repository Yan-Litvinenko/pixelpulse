import { achievementsFilter } from '../achievementsFilter';
import type { IAchieve } from '../../interfaces/interface.achievements';

const mockAchievements = Array.from({ length: 6 }).map((_, index) => {
    return { status: index > 2 ? 'achieved' : 'in progress' };
}) as IAchieve[];

const mockAchievementsAchieved: IAchieve[] = mockAchievements.filter(
    (achieve) => (achieve as IAchieve).status === 'achieved',
);
const mockAchievementsNotAchieved: IAchieve[] = mockAchievements.filter(
    (achieve) => (achieve as IAchieve).status === 'in progress',
);

describe('filter achievements', (): void => {
    // achieve status/achieve block
    test('Should return achievements all/achieved', (): void => {
        expect(achievementsFilter(mockAchievements, 'all', 'achieved')).toEqual(mockAchievementsAchieved);
    });

    test('Should return achievements all/in progress', (): void => {
        expect(achievementsFilter(mockAchievements, 'all', 'in progress')).toEqual(mockAchievementsNotAchieved);
    });

    test('Should return achievements achieved/achieved', (): void => {
        expect(achievementsFilter(mockAchievements, 'achieved', 'achieved')).toEqual(mockAchievementsAchieved);
    });

    test('Should return achievements achieved/in progress', (): void => {
        expect(achievementsFilter(mockAchievements, 'achieved', 'in progress')).toEqual([]);
    });

    test('Should return achievements in progress/achieved', (): void => {
        expect(achievementsFilter(mockAchievements, 'achieved', 'in progress')).toEqual([]);
    });

    test('Should return achievements in progress/in progress', (): void => {
        expect(achievementsFilter(mockAchievements, 'inProgress', 'in progress')).toEqual(mockAchievementsNotAchieved);
    });
});
