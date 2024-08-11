import React from "react";
import Box from "./about-box";
import details from "./details";


const AboutUs = () => {


    return (
        <div id="about">
            <section>
                <h3><span>Why </span>Choose <span>Us</span></h3>
                <div>
                    <Box list={details}/>
                </div>
            </section>
        </div>
    )
}

export default AboutUs