import React from "react";

class Apple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            size: "medium",
            mytest : {
                name: "",
                age: 30,
            },
            showMyTest: false, // Add this flag
        };

        
    } 
    
    changeColor = () => {
        this.setState({ color: "green" });
    };
    
    changeSize = () => {
        this.setState({ size: "large" });
    };

    myTestFunction = () => {
        this.setState({ 
            mytest: {
                ...this.state.mytest, name: 'Manimaran'
            },
            showMyTest: true, // Show when button clicked
        });
    };
    
    toggleMyTestFunction = () => {
        this.setState((prevState) => ({
            mytest: {
                ...prevState.mytest,
                name: prevState.showMyTest ? "" : "Manimaran", // Set name when showing, clear when hiding
            },
            showMyTest: !prevState.showMyTest, // Toggle flag
        }));
    };
    
    render() {
        return (
        <div>
            <h1>Apple</h1>
            <p>Color: {this.state.color}</p>
            <p>Size: {this.state.size}</p>
            {/* <h2>My function :{this.state.mytest.name}</h2> */}
             {this.state.showMyTest && ( <h2>My function :{this.state.mytest.name}</h2>)}
            <button onClick={this.changeColor}>Change Color</button>
            <button onClick={this.changeSize}>Change Size</button>
            <button onClick={this.toggleMyTestFunction}>
                    {this.state.showMyTest ? "My Test" : "My Test"}
                </button>
        </div>
        );
    }
    }

    export default Apple;