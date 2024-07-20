interface ISmoothTransition {
    children: React.ReactNode;
}

interface IPageTransition {
    duration: number;
}

export { IPageTransition, ISmoothTransition };
