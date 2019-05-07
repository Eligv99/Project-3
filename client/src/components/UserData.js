import React, { Component } from 'react';
import AUTHAPI from '../utils/local-auth';
import { Link } from 'react-router-dom';

class UserData extends Component{
    
    componentDidMount = () => {
        AUTHAPI.getUserData().then( userResponse => {
            if(userResponse.data){
                this.props.setUser(userResponse.data);
            }
        })
    }
    render() {

        const f_name = (this.props.user.first_name);
        const s_name = (this.props.user.second_name);
        const email = (this.props.user.email);

        console.log(this.props.user)

        return (
            <div>
                <div className="user-block">
                    { this.props.user.email ? (

                        <ul>
                            <li> First Name : {f_name} </li>
                            <br/>
                            <li> Second Name : {s_name} </li>
                            <br/>
                            <li> Email : {email} </li>
                        </ul>) 
                        // TRUE
                        : 
                        // FALSE
                        (<p>{`Please sign in at `} <Link to="/register">Sign Up</Link> </p>)
                    }
                </div>
            </div>
        );
    }
}

export default UserData;