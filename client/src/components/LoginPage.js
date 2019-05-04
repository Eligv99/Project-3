import React, { Component } from 'react';
import AUTHAPI from '../utils/local-auth';
import { Link, Redirect } from 'react-router-dom';

class LoginPage extends Component {

    state = {
        email: "",
        password: "",
        errMessage: null
    }

    handleInputChange = event => {

        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(event.target);
        AUTHAPI.loginUser({
            email: this.state.email,
            password: this.state.password
        }).then(response => {

            // USER DATA
            let user = response.data;

            // VERIFY FOR EMAIL AND USER
            if (user && user.email) {
                this.props.setUser(user);
                this.setState({
                    errMessage: null
                });
            }
            else {
                this.setState({
                    errMessage: "Could not log in. Try again."
                });
            }
        }).catch(error => {
            this.setState({
                errMessage: "Could not log in, Try again."
            });
        })
    }

    render() {

        // IF YOU FIND A USER SEND IT TO HOMEPAGE
        if (this.props.user && this.props.user.email) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                <div className="form-block">
                    <form className="search">
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                type="text"
                                className="form-control"
                                placeholder="Type in Email"
                                id="email"
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Type in Password"
                                id="password"
                            />
                        </div>

                        <button type="submit" onClick={this.handleFormSubmit} className="btn">
                            Search
                        </button>
                    </form>
                    
                    {/* TESTING FOR ERRORS IF ANY */}
                    {this.state.errMessage}
                </div>
            </div>
        );
    }

}

export default LoginPage;