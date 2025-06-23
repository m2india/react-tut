import React from "react";

class Apple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        color: "red",
        size: "medium",
        };
    }
    
    changeColor = () => {
        this.setState({ color: "green" });
    };
    
    changeSize = () => {
        this.setState({ size: "large" });
    };
    
    render() {
        return (
        <div>
            <h1>Apple</h1>
            <p>Color: {this.state.color}</p>
            <p>Size: {this.state.size}</p>
            <button onClick={this.changeColor}>Change Color</button>
            <button onClick={this.changeSize}>Change Size</button>
        </div>
        );
    }
    }

    export default Apple;