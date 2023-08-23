import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import CoursesPage from './Components/CoursesPage';
import Footer from './Components/Footer';
import CourseDetail from './Components/CourseDetail';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:subject" element={<CoursesPage />} />
        <Route path="/:subject/:course" element={<CourseDetail />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

