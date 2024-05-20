import React from 'react';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import Button from '../button/Button';

interface IStatistics {
    className: Record<string, string>;
}

const HeaderStatistics = ({ className }: IStatistics): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    return (
        <div className={className.statistics}>
            <div className={className.level__box}>
                <span className={className.level__text}>48</span> level
            </div>
            <div className={className.coins}>
                <div className={className.coins__add_box}>
                    <Button
                        className={`${className.coins__btn} ${contextApp?.isPressCoinBtn ? className.coins__btn_pulse : ''}`}
                        delayEvent={false}
                        handleButton={() => {}}
                        textContent="+"
                        type="button"
                    />
                    {contextApp?.isPressCoinBtn ? <div className={className.pulse}></div> : null}
                </div>

                <div className={className.coins__text_box}>
                    <span className={className.coins__text}>1,425</span> coins awarded
                </div>
            </div>
        </div>
    );
};

export default HeaderStatistics;
