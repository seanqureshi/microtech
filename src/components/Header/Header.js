import React, { Component } from 'react';
import Logo from '../../assets/Logos/MicroTech_MED.jpg'

export default class Header extends Component {
  render() {
    return (
      <header className="header-home">
        <div className="header-nav">
          <div className="logo-container">
            <img className="logo" src={Logo} alt="Micro Technologies Logo" />
          </div>
          <nav className="nav-links">
            <ul>
              <li>STOCKER</li>
              <li>FEEDYARD</li>
              <li>DAIRY</li>
              <li>INTEGRATOR</li>
              <li className="white-btn">CONTACT</li>
            </ul>
          </nav>
        </div>
        <div class="sub-header">
          <nav className="nav-sublinks">
            <ul>
              <li>THE MICRO DIFFERENCE</li>
              <li>ABOUT</li>
              <li>KNOWLEDGE BASE</li>
              <li>CAREERS</li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
