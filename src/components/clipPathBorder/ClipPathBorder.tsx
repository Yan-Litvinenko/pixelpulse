import React from 'react';
import type { IClipPathBorder } from '../../interfaces/interface.component';

const ClipPathBorder = (props: IClipPathBorder): React.JSX.Element => {
    return <div className={props.className}></div>;
};

export { ClipPathBorder };
