import React from 'react';
import './dials.css';

/**
 * Renders dials and attach an onCLick action to them
 * @param {Object} props - component properties
 * @param {string} props.val - dial value
 * @param {function} props.action - action to trigger on click
 * @param {string} props.customClass - css class for component
 */
const Dials = ({ val, action, customClass }) => {
    const className = customClass ? `${customClass} calc-dial` : 'calc-dial';
    return (
        <div className={className} onClick={() => action(val)}>
            <span> {val} </span>
        </div>
    );
}

export default Dials;
