import React, { Component } from "react";

class InfoBar extends Component {
    render() {
        return (
            <div className="info-bar">
                <div className="block">
                    <a className="hyper-links" href="/support">Support </a>
                    <span className="hyper-links">  /  <br /></span>
                    <a className="hyper-links" href="/">Home </a>
                    <span className="hyper-links">  /  <br /></span>
                    <a className="hyper-links" href="/account">Account </a>
                </div>
            </div>
        );
    }
}


export default InfoBar;