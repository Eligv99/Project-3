import React, { Component } from 'react';
import AUTHAPI from '../utils/local-auth';
import { Link } from 'react-router-dom';

class UserData extends Component{


    logout = () => {
        AUTHAPI.getLogout().then( out => {
          this.setState({
            user: {}
          })
          window.location = '/account';
        })
    };


    render() {

        const f_name = (this.props.first);
        const s_name = (this.props.last);
        const email = (this.props.email);

        console.log(this.props.user)

        return (
            <div className="user-data">
                <div className="user-block">
                    { this.props.email ? (

                        <ul>
                            <li> First Name : {f_name} </li>
                            <br/>
                            <li> Last Name : {s_name} </li>
                            <br/>
                            <li> Email : {email} </li>
                        </ul>) 
                        // TRUE
                        : 
                        // FALSE
                        (<p>{`Please sign in at `} <Link to="/signup">Sign Up</Link> OR <Link to="/login">Login</Link></p>)
                    }

                    <br/>

                    <Link to="/">
                        <button>Home</button>
                    </Link>

                    <br/>
                    <br/>


                    <Link>
                        <button onClick={this.logout}>Logout</button>
                    </Link>

                </div>
            </div>
        );
    }
}

export default UserData;