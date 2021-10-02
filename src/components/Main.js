import React, { Component } from 'react'
import "../App.css";
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../views/Home.js';
import About from '../views/About.js';
import Contact from '../views/Contact.js';
import Login from '../views/Login.js';
import Profile from '../views/Profile.js';
import Register from '../views/Register.js';
import Cart from '../views/Cart.js';
import Product from '../views/Product';





export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <Link className="navbar-brand" to=".">Fakeshop React</Link>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to=".">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About Us</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/cart" id="dropdownId" data-toggle="dropdown" aria-expanded="false">Cart</Link>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <Link className="dropdown-item" to=".">Product</Link>
                                        <Link className="dropdown-item" to="."> Total price</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item" >
                                    <Link className="nav-link" to="/auth/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </header>

                <main className="container">

                    <Switch>
                        <Route exact path='/' render={() => <Home data={this.props.data} />} />
                        <Route exact path='/about' render={() => <About />} />
                        <Route exact path='/contact' render={() => <Contact />} />
                        <Route exact path='/auth/login' render={() => <Login />} />
                        <Route exact path='/profile' render={() => <Profile />} />
                        <Route exact path='/register' render={() => <Register />} />
                        <Route exact path='/cart' render={() => <Cart />} />
                        <Route exact path='/product' render={() => <Product />} />
                    </Switch>

                </main>

                <footer>

                </footer>

            </React.Fragment>
        )
    }
}