import React from 'react';
import '../styles/Header.css'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import Personlogo from '../images/person.png';
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="NXT Wave" className="logo" />
      <div className="profile">
      <Link to="/add-resource" className="add-button">+ ADD</Link>
        <img src={Personlogo} alt="User" className="profile-pic" />
      </div>
    </div>
  );
}

export default Header;
