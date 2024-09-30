export type HeroContactsProps = {
    title: 'social' | 'availability';
    text: string;
    className: {
        element: string;
        title: string;
        button: string;
    };
    image: 'hexagon' | 'bluetooth';
    modal: 'availability' | 'social';
};

export type HeroAvatarProps = {
    className: {
        avatar: string;
        canvas: string;
        link: string;
    };
};
