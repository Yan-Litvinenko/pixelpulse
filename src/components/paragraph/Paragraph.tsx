import React from 'react';

interface IParagraph {
    className: string;
    textContent: string;
}

const Paragraph = (props: IParagraph): React.JSX.Element => <p className={props.className}>{props.textContent}</p>;

export default Paragraph;
