import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <h3> Login</h3>
                <hr />
<div className="container">
                <div className="col-md-6 offset-md-3 ">
                    <form className="form-signin" action="" method="POST" >
                        <span id="reauth-email" className="reauth-email"></span>
                        <div>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                        </div>
                        <div>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        </div>
                        <div id="remember" className="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-primary btn-block btn-signin" type="submit">Sign in</button>
                    </form>
                    <a href="." className="forgot-password">
                        Forgot the password?
                    </a>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
