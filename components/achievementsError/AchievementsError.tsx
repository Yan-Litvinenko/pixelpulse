'use client';

import React from 'react';
import useModal from '@/hooks/useModal';

export default function AchievementsError(): React.JSX.Element {
    const modal = useModal('social');

    return (
        <ul className={'achievements_error'}>
            <li className={'achievements_error__item'}>
                Check your internet connection. Ensure that you are connected to a stable network.
            </li>
            <li className={'achievements_error__item'}>
                Try refreshing the page by pressing Ctrl+R or Command+R on your keyboard.
            </li>
            <li className={'achievements_error__item'}>
                If you are using a VPN, try disabling it and reloading the page.
            </li>
            <li className={'achievements_error__item'}>
                Clear your browser&prime;s cache and cookies, then try reloading the page.
            </li>
            <li className={'achievements_error__item'}>
                If the error persists, please write to{' '}
                <span onClick={() => modal.open()} data-testid="achievements-modal-error">
                    me
                </span>
            </li>
        </ul>
    );
}
