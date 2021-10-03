import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <h3> Register page</h3>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        </div>

                        <div className="col-sm">
                            <form className="form-signin" action="" method="POST">
                                <span id="email" className="email"></span>
                                <div className="form-group ">
                                    <input type="username" className="form-control" placeholder="Create your username" required autofocus />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control " placeholder="Email address" required autofocus />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="form-group" >
                                    <input type="password" className="form-control" placeholder="Re-enter Password" required />
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                                    <a href="." className="forgot-password">
                                        Forgot the password?
                                    </a>
                                </div>
                                <button className="btn btn-dark btn-block btn-signin bg-secondary "bg-secondary type="submit">Create profile</button>
                            </form>
                        </div>

                        <div className="col-sm">
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

