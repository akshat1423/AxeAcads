import React from 'react';
import { useParams } from 'react-router-dom';
import { subjects } from './subjectsData'; // Assuming subjectsData.js is in the same folder
import Latex from 'react-latex';
import { courseData } from './CourseData';


const CourseDetail = () => {
  const { subject, course } = useParams();
  const matchedSubject = subjects.find((subj) => subj.name === subject);
  if (!matchedSubject) return <h1 align="center">Subject not found!</h1>;
  const matchedCourse = courseData.find((subj) => subj.name === course);
  if (!matchedCourse) return <h1 align="center">Content for this course will be added soon! Stay Tuned...</h1>;
  console.log( matchedCourse);
  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>{course}</h2>
      <p>Notes: { 
    matchedCourse.Notes ? 
    <a href={matchedCourse.Notes}>Notes</a> : 
    <span style={{display:"inline"}}>Will be here soon!</span>
  }
</p>
<p>Previous Year Papers: { 
    matchedCourse.Exam_Papers ? 
    <a href={matchedCourse.Exam_Papers}>Previous Year Papers</a> : 
    <span style={{display:"inline"}}>Will be here soon!</span> 
  }
</p>
<p>Slides(previous batches): { 
    matchedCourse.Slides ? 
    <a href={matchedCourse.Slides}>Slides</a> : 
    <span style={{display:"inline"}}>Will be here soon!</span> 
  }
</p>
<p>Tutorials: { 
    matchedCourse.tutorials ? 
    <a href={matchedCourse.tutorials}>Tutorials</a> : 
    <span style={{display:"inline"}}>Will be here soon!</span> 
  }
</p>

      {/* <Latex> \( a^2 + b^2 = c^2 \) </Latex>
      <Latex> \( \int_0^1 x^2 dx \) </Latex> */}

      {/* You can render LaTeX content here. Use a package like react-latex or something similar */}
    </div>
  );
};

export default CourseDetail;
