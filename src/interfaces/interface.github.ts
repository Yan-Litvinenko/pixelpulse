type IGithubRespone = {
    author: IUser;
    comments_url: string;
    commit: ICommit;
    committer: IUser;
    html_url: string;
    node_id: string;
    parents: IParents;
} & ITree;

type ICommit = {
    author: IAuthor;
    comment_count: number;
    committer: IAuthor;
    message: string;
    tree: ITree;
    url: string;
    verification: IVerification;
};

type ICommitTransform = {
    message: string;
    date: string;
};

type ILogsLoader = {
    commits: ICommitTransform[];
    lastUpdate: string;
};

type IUser = {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
};

type IAuthor = {
    date: string;
    email: string;
    name: string;
};

type ITree = {
    sha: string;
    url: string;
};

type IVerification = {
    payload: null;
    reason: string;
    signature: null;
    verified: false;
};

type IParents = {
    html_url: string;
} & ITree;

export type { IGithubRespone, ICommit, ICommitTransform, ILogsLoader, IUser, IParents };
