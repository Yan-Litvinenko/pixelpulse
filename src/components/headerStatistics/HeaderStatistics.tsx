import React from 'react';
import Button from '../button/Button';

interface IStatistics {
    className: Record<string, string>;
}

const HeaderStatistics = ({ className }: IStatistics): React.JSX.Element => {
    return (
        <div className={className.statistics}>
            <div className={className.level__box}>
                <span className={className.level__text}>48</span> level
            </div>
            <div className={className.coins}>
                <div className={className.coins__add_box}>
                    <Button
                        className={className.coins__btn}
                        delayEvent={false}
                        handleButton={() => {}}
                        textContent="+"
                        type="button"
                    />
                </div>

                <div className={className.coins__text_box}>
                    <span className={className.coins__text}>1,425</span> coins awarded
                </div>
            </div>
        </div>
    );
};

export default HeaderStatistics;
