import React from "react";
import hero from '../../lawyer-hero.jpeg'
import './team.css'


const Team = () => {


    return (
        <div id="team">
            <h2>Our Team</h2>
            <p>
                Our highly sort after teamare drawn from various backgrounds to fit the utmost needs of 
                the society
            </p>
            <div className="row-team">
                <div className="col">
                    <img src={hero} alt="" />
                    <div className="btn-group">
                        <p>Bernard Bob-Manuel Eqs <br /><i>Divorce Expert</i></p>
                        <button>View Details & connect</button>
                    </div>
                </div>
                <div className="col">
                    <img src={hero} alt="" />
                    <div className="btn-group">
                        <p>Bernard Bob-Manuel Eqs <br /><i>Divorce Expert</i></p>
                        <button className="adjust-btn">connect</button>
                    </div>
                </div>
                <div className="col">
                    <img src={hero} alt="" />
                    <div className="btn-group">
                        <p>Bernard Bob-Manuel Eqs <br /><i>Divorce Expert</i></p>
                        <button className="adjust-btn">Connect</button>
                    </div>
                </div>
                <div className="col">
                    <img src={hero} alt="" />
                    <div className="btn-group">
                        <p>Bernard Bob-Manuel Eqs <br /><i>Divorce Expert</i></p>
                        <button>View Details & connect</button>
                    </div>
                </div>
                <div className="col">
                    <img src={hero} alt="" />
                    <div className="btn-group">
                        <p>Bernard Bob-Manuel Eqs <br /><i>Divorce Expert</i></p>
                        <button>View Details & connect</button>
                    </div>
                </div>
                <div className="col">
                    <img src={hero} alt="" />
                    <div className="btn-group">
                        <p>Bernard Bob-Manuel Eqs <br /><i>Divorce Expert</i></p>
                        <button>View Details & connect</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team