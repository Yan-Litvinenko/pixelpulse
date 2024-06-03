import React from 'react';
import { Image, Folder } from '../svgIcon/SvgIcon';
import styles from './CreationsXplorerItem.module.scss';

interface ICreationsXplorerItem {
    image: 'image' | 'folder';
    onClick: () => void;
    textContent: string;
}

const CreationsXplorerItem = ({ image, textContent, onClick }: ICreationsXplorerItem) => {
    return (
        <li className={styles.item} onClick={onClick}>
            <div className={styles.frame}>{image === 'image' ? <Image /> : <Folder />}</div>
            {image === 'image' ? textContent.slice(5) : textContent}
        </li>
    );
};

export default CreationsXplorerItem;
