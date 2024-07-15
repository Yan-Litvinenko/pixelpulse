import React from 'react';
import { Image, Folder } from '../svgIcon/SvgIcon';
import { ICreationsXplorerItem } from '../../interfaces/interface.creations';
import styles from './CreationsXplorerItem.module.scss';

const CreationsXplorerItem = (props: ICreationsXplorerItem): React.JSX.Element => {
    const { image, textContent, onClick } = props;

    return (
        <li className={styles.item} onClick={onClick}>
            <div className={styles.frame}>{image === 'image' ? <Image /> : <Folder />}</div>
            {image === 'image' ? textContent.slice(5) : textContent}
        </li>
    );
};

export default CreationsXplorerItem;
