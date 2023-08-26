import React from 'react';
import { useParams } from 'react-router-dom';
import { subjects } from './subjectsData'; // Assuming subjectsData.js is in the same folder
import Latex from 'react-latex';
import { courseData } from './CourseData';


const CourseDetail = () => {
  const { subject, course } = useParams();
  const matchedSubject = subjects.find((subj) => subj.name === subject);
  if (!matchedSubject) return <h1>Subject not found!</h1>;
  const matchedCourse = courseData.find((subj) => subj.name === course);
  console.log( matchedCourse);
  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>{course}</h2>
      <p>Google Drive Links:</p>
      <p>{matchedCourse.GoogleDriveLink}</p>
      <p>PDFs:{matchedCourse.pdfLink}</p>
      <p>Tutorials:{matchedCourse.tutorials}</p>
      {/* <Latex> \( a^2 + b^2 = c^2 \) </Latex>
      <Latex> \( \int_0^1 x^2 dx \) </Latex> */}

      {/* You can render LaTeX content here. Use a package like react-latex or something similar */}
    </div>
  );
};

export default CourseDetail;
