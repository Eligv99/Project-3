import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AUTHAPI from './utils/local-auth'
import Homepage from "./pages/Homepage"
import SupportPage from "./pages/SupportPage"
import LoginPage from "./pages/Login"
import Registerpage from "./pages/Register"

class App extends Component {
  // EMPTY USER AS DEFAULT
  state = {
    user: {}
  }
  setUser = (user) => {
    this.setState({
      user: user
    });
  }

  logout = () => {
    AUTHAPI.getLogout().then( out => {
      this.setState({
        user: {}
      })
      window.location = '/logout';
    })
  };

  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/support" component={SupportPage} />
            <Route exact path="/login" render ={
              () => (
                <LoginPage {...this.props} setUser={this.setUser} user={this.state.user} />
              )
            } />
            <Route exact path="/register" component={Registerpage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
