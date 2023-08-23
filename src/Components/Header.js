// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [showNav, setShowNav] = useState(false);

//   const toggleNav = () => {
//     setShowNav(!showNav);
//   };

//   return (
//     <div style={{ background: '#3f51b5', color: 'white', padding: '10px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//       <h1 style={{ margin: 0 }}>YearOneResources</h1>
//       <div className="burger-menu" onClick={toggleNav}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//       <nav className={showNav ? 'show-nav' : ''} style={{ display: 'flex', justifyContent: 'center' }}>
//         <Link to="/" style={{ color: 'white', textDecoration: 'none', padding: '0 15px' }}>Home</Link>
//         <Link to="/about-me" style={{ color: 'white', textDecoration: 'none', padding: '0 15px' }}>About Me</Link>
//       </nav>
//     </div>
//   );
// };

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary custom-navbar"  >
      <Link className="navbar-brand ml-3" style={{ marginLeft: '30px' }} to="/">AxeAcads</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Me</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="https://akshat1423.github.io/diary/">Note Making</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/help">Need any Help? Doubt? Query?</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/suggestion">Suggestion? Experience? </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
