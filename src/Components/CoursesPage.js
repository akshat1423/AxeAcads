import React from 'react';
import SubjectBox from './SubjectBox';
import { useParams } from 'react-router-dom';
import { subjects } from './subjectsData'; // Assuming subjectsData.js is in the same folder

const CoursesPage = () => {
  const { subject } = useParams();
  const matchedSubject = subjects.find((subj) => subj.name === subject);
  if (!matchedSubject) return <h1>Subject not found!</h1>;
  const courses = [
    { name: matchedSubject.courses1, bgImage: 'path/to/course1-image.jpg' },
    { name: matchedSubject.courses2, bgImage: 'path/to/course2-image.jpg' },
  ];

  return (
    <>
    <div style={{ height: '80px' }}></div>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {courses.map((course, index) => (
        <SubjectBox key={index} name={course.name} bgImage={course.bgImage} url={`/${subject}/${course.name}`} />
      ))}
    </div>
    </>
  );
};

export default CoursesPage;
