import React from 'react';
import "./ButtonRow.css";

class ButtonRow extends React.Component {
    render() {
    return (
    <div className="buttons">
        <div className="button1">
            <h2>Button 1</h2>
        </div>
        <div className="button2">
            <h2>Button 2</h2>
        </div>
        <div className="button3">
            <h2>Button 3</h2>
        </div>
        <div className="button4">
            <h2>Button 4</h2>
        </div>
    </div>
    );
    }
}

export default ButtonRow;