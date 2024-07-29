import React from 'react';
import { nanoid } from 'nanoid';
import { Rarity } from '../../interfaces/interface.achievements';
import { ISelectChallenge } from '../../interfaces/interface.component';
import styles from './SelectChallenge.module.scss';

const rarity: Rarity[] = ['unusual', 'rare', 'epic', 'legendary'];

const SelectChallenge = (props: ISelectChallenge): React.JSX.Element => {
    const { setSelectValue, register, selectValue } = props;
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const selectClick = (): void => setIsOpen(!isOpen);
    const optionClick = (value: Rarity): void => {
        setSelectValue(value);
        setIsOpen(false);
        register('rarity', { value: value });
    };

    return (
        <>
            <div>
                <h3 className={styles.title} onClick={selectClick}>
                    achievement rarity
                </h3>
                <div className={`${styles.select} ${isOpen ? styles.select_deactive : ''}`} onClick={selectClick}>
                    <h4>{selectValue}</h4>
                    {isOpen ? (
                        <div className={styles.select__content}>
                            {isOpen &&
                                rarity.map((option) => (
                                    <div
                                        key={nanoid()}
                                        className={styles.select__option}
                                        onClick={() => optionClick(option as Rarity)}
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

export { SelectChallenge };
