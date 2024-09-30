import React from 'react';
import styles from '@/styles/components/selectChallenge/SelectChallenge.module.scss';
import { nanoid } from '@reduxjs/toolkit';
import type { Rarity } from '@/interface/achievements/achievements.interface';
import type { SelectChallengeProps } from '@/interface/form/form.interface';

const rarity: Rarity[] = ['unusual', 'rare', 'epic', 'legendary'];

export default function SelectChallenge(props: SelectChallengeProps): React.JSX.Element {
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
            <section>
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
            </section>
        </>
    );
}
