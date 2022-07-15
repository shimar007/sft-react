import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Main() {
    return (
        <Router>
            <div className="main-content">
                <Header/>
                <Body/>
                <Sidebar/>
                <Footer/>
            </div>
        </Router>
    );
}
  
export default Main;