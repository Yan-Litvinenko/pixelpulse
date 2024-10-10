export const GET_ALL_ACHIEVEMENTS = `
    query {
        getAllAchievements {
            date
            description
            rarity
            status
            title
        }
    }
`;

export const GET_STATISTIC = `
    query {
        getStatistic {
            level
            coins
        }
    }
`;

export const GET_SERVER_TIME = `
    query {
        getServerTime {
            serverTime
        }
    }
`;

export const GET_GITHUB_COMMITS = `
    query {
        getGithubCommits {
            message
            committedDate
        }
    }
`;

export const UPDATE_STATISTIC = `
    mutation {
        addCoinsAndUpdateLevel {
            level
            coins
        }
    } 
`;
