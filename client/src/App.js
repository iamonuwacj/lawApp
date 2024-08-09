// import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Home from './components/Home/home';
import './Nav.css'
import HomeFooter from './components/Home/home-footer';
import AboutUs from './components/About/about-us';

function App() {
    return (
        <div className="App">
            <Nav />
            <Home />
            <HomeFooter />
            <AboutUs />
        </div>
    );
}

export default App;
