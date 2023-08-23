import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    position: 'relative',
    width: '200px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
    zIndex: 1,
  },
  text: {
    position: 'relative',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    textAlign: 'center',
    zIndex: 2,
  },
};

const SubjectBox = ({ name, bgImage, url }) => {
  const combinedStyles = {
    ...styles.container,
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <Link to={url || `/${name}`}>
      <div style={combinedStyles}>
        <div style={styles.overlay}></div>
        <div style={styles.text}>
          {name}
        </div>
      </div>
    </Link>
  );
};

export default SubjectBox;
