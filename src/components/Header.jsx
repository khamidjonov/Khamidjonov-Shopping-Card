import React from 'react';

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#1" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#1">REPO</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
