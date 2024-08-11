import React from "react";
import './box.css'



function Box({list = []}) {

    return (
        <div className="box">
            {
                list.map((item) =>
                    <div key={item.id} className="box-item">
                        <div className="img-container"><img src="#" alt="logo" /></div>
                        <h2>{item.header}</h2>
                        {item.statement}
                    </div>
                )
            }
        </div>
    )
}


export default Box