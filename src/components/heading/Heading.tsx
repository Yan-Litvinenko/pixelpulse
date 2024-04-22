import React from 'react';

interface IHeading {
    className: string;
    image?: () => React.ReactNode;
    level: string;
    textContent: string;
}

const Heading = (props: IHeading): React.JSX.Element => {
    const HeadingLevel = `h${props.level}` as keyof JSX.IntrinsicElements;

    return (
        <HeadingLevel className={props.className}>
            {props.textContent}
            {props.image && props.image()}
        </HeadingLevel>
    );
};

export default Heading;
