import * as React from 'react';
class ColoredText extends React.Component {
    constructor(){
        super();
        this.state = {
            color: "Pink"
        }
    }
onColorChange = (event) => {
    this.setState({
        color: event.target.value
    })
}

    render() {
        return (
            <div>
                <div onChange={this.onColorChange}>
                <input type="radio" value="Red" name="color"/><span>Red</span>
                <input type="radio" value="Green" name="color"/><span>Green</span>
                <input type="radio" value="Blue" name="color"/><span>Blue</span>
                </div>
                <p style={{color: this.state.color}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui eros. Suspendisse sodales molestie risus, eget convallis sem venenatis et. Suspendisse finibus lacus ac ex euismod, et sodales massa tristique. Mauris ut pellentesque libero. Donec ullamcorper est dolor, quis blandit lacus hendrerit in. In porta cursus risus id euismod. Pellentesque imperdiet erat eget enim sagittis consequat. Pellentesque aliquet augue ac justo scelerisque, sed sollicitudin diam tempus. Quisque pharetra nibh vitae neque cursus iaculis. Fusce vitae feugiat est. Mauris dictum consequat diam id hendrerit.
                </p>
            </div>
        );
    }
}
export default ColoredText;