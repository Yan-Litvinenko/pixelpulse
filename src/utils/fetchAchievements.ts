import { IAchieve } from '../interfaces/interface.achievements';

const fetchAchievements = async (): Promise<IAchieve[]> => {
    try {
        const response: Response = await fetch('/getAchievements');

        if (response.ok) {
            const achievements: IAchieve[] = await response.json();
            return achievements;
        }
    } catch (error) {
        setTimeout(fetchAchievements, 1000);
        console.error('get achievements:', error);
        return [];
    }

    return [];
};

export default fetchAchievements;
