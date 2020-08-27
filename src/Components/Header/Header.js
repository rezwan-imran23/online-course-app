import React from 'react';
import logo from '../../images/udemy-2-logo-png-transparent.png';
import './Header.css';

const Header = () => {
    return (
        <div>
<nav class="navbar navbar-light bg-light">
  <img src={logo} alt=""/>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    <button type="button" class="btn btn-success ml-4">Login</button>
  </form>
</nav>
<br/>

<div className="head-container">
    <h1 class="text-center">The world's largest selection of courses</h1>
    <p class="text-center">Choose from 150,000 online video courses with new additions published every month</p>
    <div class="d-flex justify-content-center">
    <ul className="category">
        <li>
            <a href="#">Business</a>
            <a href="#">Design</a>
            <a href="#">Photography</a>
            <a href="#">Development</a>
            <a href="#">Marketing</a>
        </li>
    </ul>
    </div>
</div>

</div>
    );
};

export default Header;