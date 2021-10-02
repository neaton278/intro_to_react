import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <h3> Login</h3>
                <hr />
                <div className="container">
                        <form className="form-signin" action="" method="POST" >
                            <span  className="reauth-email"></span>
                            <div>
                                <input type="email"  className="form-control" placeholder="Email address" required autofocus />
                            </div>
                            <div>
                                <input type="password" className="form-control" placeholder="Password" required />
                            </div>
                            <div id="remember" className="checkbox">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <button className="btn btn-primary btn-block btn-signin" type="submit">Sign in</button>
                        </form>
                        <Link href="." className="forgot-password">
                            Forgot the password?
                        </Link>
                    </div>
            </React.Fragment>
        )
    }
}
