import React, { Component } from 'react';
import AUTHAPI from '../utils/local-auth';
import { Link, Redirect } from 'react-router-dom';

class RegisterPage extends Component {

    state = {
        first_name: "",
        last_name: "",
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
        AUTHAPI.singUpUser({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            
            // USER DATA
            let user = response.data;

            console.log(user)
            
            // VERIFY FOR EMAIL AND USER
            if (user && user.email && user.first_name && user.last_name) {
                
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
                        <div className="input-form-block">
                            <div className="text-login">
                                Sign Up Form
                            </div>
                            <div className="form-group">

                                <label htmlFor="first_name">First Name:</label>
                                <input
                                    value={this.state.first_name}
                                    onChange={this.handleInputChange}
                                    name="first_name"
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    id="first_name"
                                />
                                <label htmlFor="second_name">Second Name:</label>
                                <input
                                    value={this.state.second_name}
                                    onChange={this.handleInputChange}
                                    name="second_name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                    id="second_name"
                                />
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

                            
                            <button type="submit" onClick={this.handleFormSubmit} className="btn-login">
                                Sign Up                            
                            </button>
                        </div>
                    </form>

                    

                </div>
            </div>
        );
    }

}

export default RegisterPage;   