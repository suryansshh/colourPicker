import React, { Component } from "react";

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showColorList: false,
            selectedColor: null,
        };
    }

    render() {
        const { selectedColor } = this.state;
        const selectedColorClass = selectedColor ? "selected-color active" : "selected-color";

        return (
        <div>
            <div
                className="selected-color"
                style={{
                    backgroundColor: selectedColor || "#ffc0cb",
                }}
            >
                <button className="pick-button" onClick={this.toggleColorList}>Pick a color</button>
                {this.state.showColorList && this.renderColorList()}
            </div>
        </div>
        );
    }

    toggleColorList = () => {
        this.setState((prevState) => ({
            showColorList: !prevState.showColorList,
        }));
    };

    selectColor = (color) => {
        this.setState({
            selectedColor: color,
            showColorList: false,
        });
    }

    renderColorList() {
        const { colors } = this.props;
        return (
            <div className="color-list">
                {colors.map((color, index) => (
                    <div className="indiv-color-square-base">
                        <div
                            key={index}
                            className="color-square"
                            style={{ backgroundColor: color }}
                            onClick={() => this.selectColor(color)}
                        ></div>
                    </div>

                ))}
            </div>
        );
    }
}

export default ColorPicker;
