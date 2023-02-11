import React from "react";
import person_3 from "../../assets/person_3.jpg";


export const Persona = () => {
    return (
        <div className="person_container">
            <div className="person_info">
                <img src={person_3} />
                <h2>Jeffery Arthur Afutu</h2>
                <h4>Full Stack Developer</h4>
                <p>kjeff24.com</p>
            </div>
            <div className="btn">
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </div>
    );
};
