import React from 'react';
import SubjectBox from './SubjectBox';
import { subjects } from './subjectsData';

const HomePage = () => {
    

  return (
    <>
    <div style={{ height: '20px' }}></div>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        
      {subjects.map((subject, index) => (
        <SubjectBox key={index} name={subject.name} bgImage={subject.bgImage} courses1={subject.courses1} courses2={subject.courses2}/>
      ))}
    </div>
    </>
  );
};

export default HomePage;
