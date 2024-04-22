import React from 'react';

interface IClipPathBorder {
    className: string;
}

const ClipPathBorder = ({ className }: IClipPathBorder): React.JSX.Element => <div className={className}></div>;

export default ClipPathBorder;
