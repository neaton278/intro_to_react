import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <h3> Register page</h3>
                <hr />
                <div className="container">
                        <form className="form-signin" action="" method="POST">
                            <span id="email" className="email"></span>
                            <div>
                                <input type="username"className="form-control" placeholder="Create your username" required autofocus />
                            </div>
                            <div>
                                <input type="email"  className="form-control" placeholder="Email address" required autofocus />
                            </div>
                            <div>
                                <input type="password"  className="form-control" placeholder="Password" required />
                            </div>
                            <div>
                                <input type="password" className="form-control" placeholder="Re-enter Password" required />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <button className="btn btn-primary btn-block btn-create" type="submit">Create your account</button>
                        </form>
                        <a href="." className="forgot-password">
                            Forgot the password?
                        </a>
                    </div>
            </React.Fragment>
        )
    }
}

