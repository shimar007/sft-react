import {BrowserRouter as Router} from 'react-router-dom';
import Favicon from 'react-favicon'
import favicon from '../images/news-16x16.png';
import Header from './base/Header';
import Body from './base/Body';
import Footer from './base/Footer';
import '../scss/index.scss';

function Main() {
    return (
        <Router>
            <Favicon url={favicon}/>
            <Header/>
            <Body/>
            <Footer/>
        </Router>
    );
}
  
export default Main;