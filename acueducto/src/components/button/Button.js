import React from "react";
import './Button.css';

const Boton = ( {nameButton} ) => {

    return(
        <div className="container-button">

            <button className="button">
                {nameButton}
            </button>

        </div>
    );
}

export default Boton;