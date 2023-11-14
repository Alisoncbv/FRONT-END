import React from "react";
import './Module.css';

<script src="https://kit.fontawesome.com/480a8b9254.js" crossorigin="anonymous"></script>

const Module = ({icon}) => {
    return(

        <div className="container-module">
            <div class="module-card">
                <div class="module">
                    <img 
                        className="module-img"
                        src={require(`../../../img/${icon}.avif`)}
                    />
                </div>
            </div>
        </div>
    );
}
export default Module;