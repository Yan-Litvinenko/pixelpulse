type AboutTitle =
    | 'The short introduction of my life'
    | 'Career and development'
    | 'More can be added in the left side for summary';

export type AboutElementProps = {
    title: AboutTitle;
    textContent: string;
};
