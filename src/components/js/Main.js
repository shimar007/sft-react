import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsDetailsPage from './pages/NewsDetailsPage';
import '../scss/index.scss';

function Main() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={(<HomePage />)}/>
                    <Route path="/news/:news_url" element={<NewsDetailsPage />}/>
                </Routes>
            </Router>
        </div>
    );
}
  
export default Main;