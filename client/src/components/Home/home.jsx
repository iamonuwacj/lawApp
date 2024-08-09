import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './home.css'
import hero from '../../lawyer-hero.jpeg'


const Home = () => {


    return (
        <div id="home">
            <div className="row">
                <div className="col">
                    <h1>Transforming experience into realities; where experience sums freedom</h1>
                    <p>A place where potential clients meets with experienced Lawyers with over 20 years
                        experience in the industry. We have dedicated, trusted and intergrity lawyers
                        with a track record across boards.
                    </p>
                    <div className="anchor">
                        <AnchorLink className="anchor-link" to="#contact">Connect</AnchorLink>
                    </div>
                </div>
                <div className="col img-container">
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home