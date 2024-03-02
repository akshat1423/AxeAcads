import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import CoursesPage from './Components/CoursesPage';
import Footer from './Components/Footer';
import CourseDetail from './Components/CourseDetail';
import HelpForm from './Components/HelpForm';
import About from './Components/About'; 
import Suggestion from './Components/Suggestion'; 

function App() {
  return (
    <Router>
      
      <Header />
      <div style={{ paddingTop: '40px' }}>
        <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/:subject" element={<CoursesPage />} />
        <Route path="/:subject/:course" element={<CourseDetail />} />
        <Route path="/help" element={<HelpForm />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

