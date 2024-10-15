export type GithubResponse = {
    data: {
        repository: {
            ref: {
                target: {
                    history: {
                        edges: GithubCommit[];
                    };
                };
            };
        };
    };
};

export type GithubCommit = {
    node: {
        message: string;
        committedDate: Date;
    };
};

export type GithubTransformCommits = {
    message: string;
    committedDate: string;
};
