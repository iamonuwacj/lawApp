import React from 'react'
import logo from '../../logo.svg'
import './service.css'


const Services = () => {


    return (
        <div id='service'>
            <div className="service-container">
                <h2>Our Services</h2>
                <p>We offer seamless service to our esteemed customers</p>
                <div className='service-pane'>
                    <div className="col">
                        <img src={logo} alt="Lawyer councelling" />
                    </div>
                    <div className="col">
                        <div className="col-icon">

                        </div>
                        <div className="col-content">
                            <h3>Mentorship and Guidance</h3>
                            <p>
                                delegating duties to legal service proffessionals, using a cloud database,
                                improving employee/client engagementand introducing legal technologies.
                            </p>
                        </div>
                        <div className="col-icon">

                        </div>
                        <div className="col-content">
                            <h3>Divorce</h3>
                            <p>
                                delegating duties to legal service proffessionals, using a cloud database,
                                improving employee/client engagementand introducing legal technologies.
                            </p>
                        </div>
                        <div className="col-icon">

                        </div>
                        <div className="col-content">
                            <h3>Child Abuse and Rape</h3>
                            <p>
                                delegating duties to legal service proffessionals, using a cloud database,
                                improving employee/client engagementand introducing legal technologies.
                            </p>
                        </div>
                        <div className="col-icon">

                        </div>
                        <div className="col-content">
                            <h3>Drug and Human Trafficking</h3>
                            <p>
                                delegating duties to legal service proffessionals, using a cloud database,
                                improving employee/client engagementand introducing legal technologies.
                            </p>
                        </div>
                        <div className="col-icon">

                        </div>
                        <div className="col-content">
                            <h3>Property and Corporate Management</h3>
                            <p>
                                delegating duties to legal service proffessionals, using a cloud database,
                                improving employee/client engagementand introducing legal technologies.
                            </p>
                        </div>
                        <div className="col-icon">

                        </div>
                        <div className="col-content">
                            <h3>Peace and Conflict Resolution</h3>
                            <p>
                                delegating duties to legal service proffessionals, using a cloud database,
                                improving employee/client engagementand introducing legal technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services