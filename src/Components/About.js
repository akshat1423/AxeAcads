import React from 'react';
import { Link } from 'react-router-dom';
import Me from './Me.PNG';

const About = () => {
  return (
 <>
 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:'15%' }}>
      <div style={{ width: '60%' }}>
 <h5 align="center" style={{whiteSpace: 'pre-line', marginLeft:"13%", marginRight:"13%"}}>Chaliye Shuru karte hai , </h5> 
 <h3 align="center" style={{whiteSpace: 'pre-line', marginLeft:"13%", marginRight:"13%"}}>I am Akshat Jain, I am from Delhi (isme bhi kaafi backstory h), I am a sophomore in the Energy Science and Engineering Department ( can technically call me a Freshie here ). {'\n'}{'\n'} I had Branch Changed from Civil Engineering to here ("BC"),its a debate its good or bad (not my decision, talking about the removal of option to do BC)</h3>
 <h4 align="center" style={{whiteSpace: 'pre-line', marginLeft:"13%", marginRight:"13%"}}>PS: Recently , I have been enjoying my time here in this new department </h4>
 <h4 align="center" style={{whiteSpace: 'pre-line', marginLeft:"13%", marginRight:"13%"}}>I had been quite enthusiastic about making this all-in-one AcadResource Website since my first semester, its great to have it finally here now!</h4>
 <h4 align="center" style={{whiteSpace: 'pre-line', marginLeft:"13%", marginRight:"13%"}}>If you have any suggestions or want to share any of you expereince you can put that on the <Link className="nav-link" style={{ display:"inline", textDecoration:"Underline"}} to="/suggestion">form</Link> or e-mail me.</h4>
 <h5 align="center" style={{whiteSpace: 'pre-line', marginLeft:"13%", marginRight:"13%"}}>Its a story in itself of how this idea came and why I thought of this project in my first semester (those who know they know)</h5>

      </div>
      <div style={{ width: '40%' }}>
        <img src={Me} alt="Description" style={{ maxWidth: '100%' }} />
      </div>
    </div>
<></></>
  );
};

export default About;


