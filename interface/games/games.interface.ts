export type GamesElementProps = {
    description: string;
    imageSrc: string;
    isActive: boolean;
    link: string;
    name: 'snake' | 'dr mario' | 'arcanoid';
};

export type JouystickProps = {
    down: () => void;
    left: () => void;
    right: () => void;
    up: () => void;
};
