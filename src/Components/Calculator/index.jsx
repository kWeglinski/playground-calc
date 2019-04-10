import React from 'react';
import DIALS from '../../Constants/DIALS';
import Dials from '../Dials';
import Screen from '../Screen';
import { actions } from '../../Helpers/Math';

import './calc.css';

/**
 * Main calculator component
 */

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            action: 'none',
            current: '0',
        }
        this.callDial = this.callDial.bind(this);
        this.callAction = this.callAction.bind(this);
    }

    /**
     * Takes user input onto display
     * @param {string} dial - numeric value picked by user
     */
    callDial(dial) {
        const { current } = this.state;
        const disablers = [
            // allow only one comma
            dial === '.' && current.indexOf('.') > -1,
            // prevent multiple zeros
            dial === 0 && current.toString().indexOf('0') === 0,
        ];
        if (disablers.find(d => d)) {
            return;
        }
        return this.setState({ current: `${current === '0' ? '' : current}${dial}` });
    }

    /**
     * Initializes user action, such as sum, subtract, equals etc.
     * @param {string} action - action type
     */
    callAction(action) {
        const { value, current } = this.state;
        // if there's no current action simply initialise new one
        if (this.state.action === 'none') {
            return this.setState({ action, current: '0', value: current });
        }
        // if there IS a current action we need to
        // execute it prior initialising new one
        const previousResult = actions[this.state.action](value, current);
        const newCurrent = this.state.action === 'equals' ? '0' : previousResult;
        this.setState({ value: previousResult, current: newCurrent, action });
    }

    render() {
        const { current } = this.state;

        return (
            <div className="calc">
                <Screen val={current} />

                <div className="calc-buttons">
                    <div className="calc-buttons-left">
                        <div className="calc-actions-top">
                            { DIALS.actions.slice(0, 3).map(dial =>
                                <Dials
                                    key={dial.display}
                                    val={dial.display}
                                    action={() => this.callAction(dial.action)}
                                    customClass="calc-action-secondary"
                                />
                            )}
                        </div>
                        <div className="calc-numbers">
                            { DIALS.numbers.map(dial =>
                                <Dials
                                    key={dial}
                                    val={dial}
                                    action={this.callDial}
                                />
                            )}
                        </div>
                    </div>
                    <div className="calc-actions">
                        { DIALS.actions.slice(3, DIALS.actions.length).map(dial =>
                            <Dials
                                key={dial.display}
                                val={dial.display}
                                action={() => this.callAction(dial.action)}
                                customClass="calc-action"
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;

