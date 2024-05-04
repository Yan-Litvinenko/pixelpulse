import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import Heading from '../heading/Heading';
import { nanoid } from 'nanoid';
import { Rarity } from '../../interfaces/interface.achievements';
import styles from './SelectChallenge.module.scss';

interface ISelectChallenge {
    register: UseFormRegister<FieldValues>;
    selectValue: Rarity;
    setSelectValue: React.Dispatch<React.SetStateAction<Rarity>>;
}

const rarity: Rarity[] = ['unusual', 'rare', 'epic', 'legendary'];

const SelectChallenge = (props: ISelectChallenge): React.JSX.Element => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const handleSelectClick = (): void => setIsOpen(!isOpen);
    const handleOptionClick = (value: Rarity) => {
        props.setSelectValue(value);
        setIsOpen(false);
        props.register('rarity', { value: value });
    };

    const selectClassName = (initClass: string): string => {
        if (isOpen) {
            return `${initClass} ${styles.select_deactive}`;
        }

        return initClass;
    };

    return (
        <>
            <div>
                <h3 className={styles.title} onClick={handleSelectClick}>
                    achievement rarity
                </h3>
                <div className={selectClassName(styles.select)} onClick={handleSelectClick}>
                    <Heading className="" level="4" textContent={props.selectValue} />
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
