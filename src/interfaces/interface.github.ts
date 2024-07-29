interface IGithubRespone extends ITree {
    author: IUser;
    comments_url: string;
    commit: ICommit;
    committer: IUser;
    html_url: string;
    node_id: string;
    parents: IParents;
}

interface ICommit {
    author: IAuthor;
    comment_count: number;
    committer: IAuthor;
    message: string;
    tree: ITree;
    url: string;
    verification: IVerification;
}

interface ICommitTransform {
    message: string;
    date: string;
}

interface ILogsLoader {
    commits: ICommitTransform[];
    lastUpdate: string;
}

interface IUser {
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
}

interface IAuthor {
    date: string;
    email: string;
    name: string;
}

interface ITree {
    sha: string;
    url: string;
}

interface IVerification {
    payload: null;
    reason: string;
    signature: null;
    verified: false;
}

interface IParents extends ITree {
    html_url: string;
}

export { IGithubRespone, ICommit, ICommitTransform, ILogsLoader, IUser, IParents };
