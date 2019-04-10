import React from 'react';

import './screen.css';

const Screen = ({ val }) => (
    <div className="calc-screen">
        <div className="calc-fake-controls">
            <div className="calc-fake-control calc-fake-controls-x">x</div>
            <div className="calc-fake-control calc-fake-controls-min">-</div>
            <div className="calc-fake-control calc-fake-controls-plus">+</div>
        </div>
        { val }
    </div>
);

export default Screen;

