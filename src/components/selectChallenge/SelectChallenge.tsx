import React from 'react';
import Heading from '../heading/Heading';
import { nanoid } from 'nanoid';
import styles from './SelectChallenge.module.scss';

type Rarity = 'unusual' | 'rare' | 'epic' | 'legendary';

const rarity: Rarity[] = ['unusual', 'rare', 'epic', 'legendary'];

const SelectChallenge = (): React.JSX.Element => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selectValue, setSelectValue] = React.useState<Rarity>('unusual');

    const handleSelectClick = (): void => setIsOpen(!isOpen);
    const handleOptionClick = (value: Rarity) => {
        setSelectValue(value);
        setIsOpen(false);
    };

    return (
        <>
            <div>
                <h3 className={styles.title} onClick={handleSelectClick}>
                    achievement rarity
                </h3>
                <div className={styles.select} onClick={handleSelectClick}>
                    <Heading className="" level="4" textContent={selectValue} />
                    {isOpen ? (
                        <div className={styles.select__content}>
                            {isOpen &&
                                rarity.map((option) => (
                                    <div
                                        key={nanoid()}
                                        className={styles.select__option}
                                        onClick={() => handleOptionClick(option as Rarity)}
                                    >
                                        {option}
                                    </div>
                                ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default SelectChallenge;
