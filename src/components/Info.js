import React, { Component } from "react";

class Info extends Component {
    render() {
        const githubLink = "http://github.com";
        return (
            <div className="text-left">
                <h2>What are they?</h2>
                Higher Order Components (HOC) allow you the ability to wrap
                components within functions returning other components with the
                functionality of the wrapped component.
                <h2>Why might you want to do this?</h2> EX: let's say you have
                several components and you want the components to have similar
                functionality but DO NOT want to duplicate the code within each
                individual component. This would potentially be a great place
                for the use of HOCs as you can write code once and reuse it
                across your application.
                <h2>The playground</h2>
                In this simplistic example, we have 3 different components which
                are simply just shapes. We also have 3 different effects defined
                within a higher order component which we define once and want to
                apply to a selected shape component. We could have theoretically
                written the code within each individual component but that would
                mean repeating the code 3 times. What happens if we add 10
                additional shapes? What happens if we decide we want the
                functionality to change for each effect? This would potentially
                lead to a maintenance nightmare.
            </div>
        );
    }
}

export default Info;
