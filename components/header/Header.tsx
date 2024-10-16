import React from 'react';
import HeaderStatistics from '../headerStatistics/HeaderStatistics';
import HeaderTime from '../headerTime/HeaderTime';

export default function Header(): React.JSX.Element {
    return (
        <header className="header">
            <HeaderStatistics />
            <HeaderTime />
        </header>
    );
}
