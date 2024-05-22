const updateAllUsersStatistic = async (): Promise<void> => {
    try {
        await fetch('/update_users_statistic');
    } catch (error) {
        console.error('error update user statistics:', error);
    }
};

export default updateAllUsersStatistic;
