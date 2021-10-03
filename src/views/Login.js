import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <h3> Login</h3>
                <hr />
                <div className="container">
                    <div className="row" >
                        <div className="col-sm">
                        </div>

                        <div className="col-sm">
                            <form className="form-signin" action="" method="POST" >
                                <span className="reauth-email"></span>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email address" required autofocus />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div id="remember" className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                                </div>
                                <button className="btn btn-dark btn-block btn-signin bg-secondary" type="submit">Sign in</button>
                            </form>
                        </div>

                        <div className="col-sm">
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}
