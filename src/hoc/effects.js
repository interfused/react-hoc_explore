import React from "react";

export const RandomPosition = WrappedComponent => {
    return class RandomPosition extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                styles: {
                    position: "absolute",
                    top: `${Math.floor(Math.random() * 100)}vh`,
                    left: `${Math.floor(Math.random() * 80)}vw`
                }
            };
        }

        render() {
            return (
                <WrappedComponent style={this.state.styles} {...this.props} />
            );
        }
    };
};

export const RandomRotation = WrappedComponent => {
    return class RandomRotation extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                styles: Object.assign({}, this.props.style, {
                    transform: `rotate(${Math.floor(Math.random() * 360)}deg)`
                })
            };
        }
        render() {
            return (
                <WrappedComponent style={this.state.styles} {...this.props} />
            );
        }
    };
};

export const RandomScale = WrappedComponent => {
    return class RandomScale extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                styles: Object.assign({}, this.props.style, {
                    transform: `scale(${Math.random()})`
                })
            };
        }

        render() {
            return (
                <WrappedComponent style={this.state.styles} {...this.props} />
            );
        }
    };
};
