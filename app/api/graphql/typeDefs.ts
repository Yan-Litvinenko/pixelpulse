import { gql } from 'graphql-tag';

export const typeDefs = gql`
    type Achievement {
        date: String
        description: String
        rarity: RarityEnum
        status: String
        title: String
    }

    enum RarityEnum {
        legendary
        epic
        rare
        unusual
    }

    type Statistic {
        level: Int
        coins: Int
    }

    type ServerTime {
        serverTime: String
    }

    type Commit {
        message: String
        committedDate: String
    }

    type Query {
        getAllAchievements: [Achievement]
        getStatistic: Statistic
        getServerTime: ServerTime
        getGithubCommits: [Commit]
    }

    type Mutation {
        addCoinsAndUpdateLevel: Statistic
    }
`;
