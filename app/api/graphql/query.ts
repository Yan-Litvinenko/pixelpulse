export const GET_ALL_ACHIEVEMENTS: string = `
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

export const GET_STATISTIC: string = `
    query {
        getStatistic {
            level
            coins
        }
    }
`;

export const GET_SERVER_TIME: string = `
    query {
        getServerTime {
            serverTime
        }
    }
`;

export const GET_GITHUB_COMMITS: string = `
       query {
         repository(owner: "Yan-Litvinenko", name: "pixelpulse") {
           ref(qualifiedName: "main") {
             target {
               ... on Commit {
                 history(first: 5) {
                   edges {
                     node {
                       message
                       committedDate
                     }
                   }
                 }
               }
             }
           }
         }
        }
`;

export const UPDATE_STATISTIC: string = `
    mutation {
        addCoinsAndUpdateLevel {
            level
            coins
        }
    } 
`;
