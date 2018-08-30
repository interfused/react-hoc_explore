import React, { Component } from "react";
import { RandomPosition, RandomRotation, RandomScale } from "../hoc/effects";

const Square = props => {
    return (
        <span className="square" style={props.style}>
            &nbsp;
        </span>
    );
};

const Triangle = props => {
    return (
        <span className="triangle" style={props.style}>
            &nbsp;
        </span>
    );
};

const Diamond = props => {
    return (
        <span className="diamond" style={props.style}>
            &nbsp;
        </span>
    );
};

class Playground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedShape: "",
            selectedEffect: ""
        };
        this.generateIt = this.generateIt.bind(this);
        this.clearPlayground = this.clearPlayground.bind(this);
        this.selectShape = this.selectShape.bind(this);
        this.selectEffect = this.selectEffect.bind(this);
    }

    generateIt() {
        if (
            this.state.selectedShape === "" ||
            this.state.selectedEffect === ""
        ) {
            window.alert("Please select desired shape and effect");
            return;
        }

        let BaseShape = "";
        switch (this.state.selectedShape) {
            case "square":
                BaseShape = Square;
                break;
            case "triangle":
                BaseShape = Triangle;
                break;
            case "diamond":
                BaseShape = Diamond;
                break;
        }
        let newItems = this.state.items;

        let WrappedComponent = null;
        console.log("this.state.selectedEffect: ", this.state.selectedEffect);
        switch (this.state.selectedEffect) {
            case "RandomPosition":
                WrappedComponent = RandomPosition(BaseShape);
                break;
            case "RandomRotation":
                WrappedComponent = RandomRotation(BaseShape);
                break;
            case "RandomScale":
                WrappedComponent = RandomScale(BaseShape);
                break;
            default:
                window.alert("unknown effect");
                return;
        }

        //const WrappedComponent2 = RandomRotation(BaseShape);

        newItems.push(<WrappedComponent />);
        //newItems.push(<WrappedComponent />);

        this.setState({
            items: newItems
        });
    }
    clearPlayground() {
        console.log("clear");
        this.setState({ items: [] });
    }
    selectShape(e) {
        const selectedShape = e.target.value;
        this.setState({
            selectedShape
        });
    }
    selectEffect(e) {
        const selectedEffect = e.target.value;
        this.setState({
            selectedEffect
        });
    }

    render() {
        return (
            <div className="playground">
                <div className="setup">
                    <div>
                        <h2>Setup</h2>
                        <div>
                            <label>Base Component</label>
                            <select onChange={this.selectShape}>
                                <option value="">Select</option>
                                <option value="square">Square</option>
                                <option value="triangle">Triangle</option>
                                <option value="diamond">Diamond</option>
                            </select>
                        </div>

                        <div>
                            <label>Desired Effect</label>
                            <select onChange={this.selectEffect}>
                                <option value="">Select</option>
                                <option value="RandomPosition">
                                    random position
                                </option>
                                <option value="RandomRotation">
                                    random rotation
                                </option>
                                <option value="RandomScale">
                                    random scale
                                </option>
                            </select>
                        </div>
                    </div>
                    <button onClick={this.generateIt}>Generate</button>
                    <button onClick={this.clearPlayground}>Clear</button>
                </div>
                <div className="results">{this.state.items}</div>
            </div>
        );
    }
}

export default Playground;
