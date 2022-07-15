import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
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