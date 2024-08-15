// import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Home from './components/Home/home';
import './Nav.css'
import HomeFooter from './components/Home/home-footer';
import AboutUs from './components/About/about-us';
import Services from './components/Services/service';
import Team from './components/Team/team';

function App() {
    return (
        <div className="App">
            <Nav />
            <Home />
            <HomeFooter />
            <AboutUs />
            <Services />
            <Team />
        </div>
    );
}

export default App;
