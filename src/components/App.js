import React, { Component } from "react";
import Playground from "./Playground";
import Info from "./Info";

import "../css/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItem: "playground"
        };
        this.className = "active";
        this.setNavItem = this.setNavItem.bind(this);
        this.getNavItem = this.getNavItem.bind(this);
    }

    setNavItem(e) {
        const navItem = e.target.dataset.navitem;
        this.setState({
            navItem
        });
    }

    getNavItem() {
        switch (this.state.navItem.toLowerCase()) {
            case "info":
                return <Info />;
            case "playground":
                return <Playground />;
            default:
                window.alert("nav item not defined");
                break;
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Higher Order Components</h1>
                    <ul className="nav">
                        <li
                            data-navitem="info"
                            className={
                                this.state.navItem === "info" ? "active" : ""
                            }
                            onClick={this.setNavItem}
                        >
                            Background
                        </li>
                        <li
                            data-navitem="playground"
                            className={
                                this.state.navItem === "playground"
                                    ? "active"
                                    : ""
                            }
                            onClick={this.setNavItem}
                        >
                            Playground
                        </li>
                    </ul>
                </header>
                <div className="mainInfoWrapper">{this.getNavItem()}</div>
            </div>
        );
    }
}

export default App;
