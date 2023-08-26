import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <nav align="center" className="navbar navbar-expand-lg navbar-dark bg-primary custom-navbar">
      <Link className="navbar-brand ml-3"  style={{marginLeft:"15px"}}to="/">AxeAcads</Link>
      <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarNav" aria-expanded={!collapsed} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${collapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" align="center" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  align="center" to="/about">About Me</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" align="center" href="https://akshat1423.github.io/diary/">Note Making</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  align="center"to="/help">Need any Help? Doubt? Query?</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" align="center" to="/suggestion">Suggestion? Experience? </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;



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
