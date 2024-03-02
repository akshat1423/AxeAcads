import React from 'react';

const Footer = () => {
  return (
    <div style={{
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '1em',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      zIndex: 100,
    }}>
      <p>Made with love ♥ Akshat Jain</p>
      <p>You might require to do google drive LDap sign in for some documents.</p>
      <p>If you have any material to be added to this website, please send it to:   
        <a href="mailto:akshatjiitb@gmail.com" style={{color: '#ffcc00'}}>  akshatjiitb@gmail.com</a>
      </p>
    </div>
  );
};

export default Footer;
