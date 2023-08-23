import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
 <> 
 <h3 align="center" style={{marginLeft:"20%", marginRight:"20%"}}>You can ask you doubts here in this Form , I will try my best to help you with your query in the minimum time possible using the help of the suitable experienced person.</h3>
 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,marginBottom:'200px'}}>
    <iframe style={{}} src="https://docs.google.com/forms/d/e/1FAIpQLSeyMR9PhanIK-RbaixKa5kZnORNB7Z0TqMgX6R_YKLblj71jQ/viewform?embedded=true" width="640" height="605" frameborder="0" marginheight="20" marginwidth="0">Loading…</iframe>
 </div></>
  );
};

export default Header;
