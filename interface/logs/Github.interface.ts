type Author = {
    date: string;
    email: string;
    name: string;
};

type Tree = {
    sha: string;
    url: string;
};

type Verification = {
    payload: null;
    reason: string;
    signature: null;
    verified: false;
};

export type GithubRespone = {
    author: User;
    comments_url: string;
    commit: Commit;
    committer: User;
    html_url: string;
    node_id: string;
    parents: Parents;
} & Tree;

export type Commit = {
    author: Author;
    comment_count: number;
    committer: Author;
    message: string;
    tree: Tree;
    url: string;
    verification: Verification;
};

export type CommitTransform = {
    message: string;
    date: string;
};

export type LogsLoader = {
    commits: CommitTransform[];
    lastUpdate: string;
};

export type User = {
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

export type Parents = {
    html_url: string;
} & Tree;

export type {};
