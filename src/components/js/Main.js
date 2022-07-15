import {BrowserRouter as Router} from 'react-router-dom';
import Header from './base/Header';
import Body from './base/Body';
import Footer from './base/Footer';
import '../scss/index.scss';

function Main() {
    return (
        <Router>
            <Header/>
            <Body/>
            <Footer/>
        </Router>
    );
}
  
export default Main;