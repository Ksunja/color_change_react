import * as React from 'react';
import { useState } from "react";

function FunctionalColorText (props) {
    const [color, setColor] = useState('Orange');
    const [background, setBackground] = useState('Black');

    const onColorChange = (event) => {
        setColor(event.target.value);

    }
    const onBackgroundChange = (event) => {
        setBackground(event.target.value);
    }
    return (
        <div>
            <div onChange={onColorChange}>
                <strong>Texst color:</strong>
                <input type="radio" value="Red" name="color" /><span>Red</span>
                <input type="radio" value="Green" name="color" /><span>Green</span>
                <input type="radio" value="Blue" name="color" /><span>Blue</span>
            </div>
            <div onChange={onBackgroundChange}>
                <strong>Background color:</strong>
                <input type="radio" value="Orange" name="color" /><span>Orange</span>
                <input type="radio" value="Gray" name="color" /><span>Gray</span>
                <input type="radio" value="Pink" name="color" /><span>Pink</span>
            </div>
            <p style={{ color: color, background: background }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui eros. Suspendisse sodales molestie risus, eget convallis sem venenatis et. Suspendisse finibus lacus ac ex euismod, et sodales massa tristique. Mauris ut pellentesque libero. Donec ullamcorper est dolor, quis blandit lacus hendrerit in. In porta cursus risus id euismod. Pellentesque imperdiet erat eget enim sagittis consequat. Pellentesque aliquet augue ac justo scelerisque, sed sollicitudin diam tempus. Quisque pharetra nibh vitae neque cursus iaculis. Fusce vitae feugiat est. Mauris dictum consequat diam id hendrerit.
            </p>
        </div>
    );
}

export default FunctionalColorText;