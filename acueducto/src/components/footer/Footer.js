import React from "react";
import './Footer.css';

const Footer = ({buttonF, buttonF1}) => {
    return(
        <div>
            <div className="container-footer">
                <div className="button-footer">
                    <a>{buttonF}</a>
                    <a>{buttonF1}</a>
                </div>

                <div className="container-contact">
                    <img
                        className="img-contact"
                        src={require(`../../img/Vector.png`)}
                    />
                </div>
            </div>

            <div className="container-copyrigth">
                <p><strong>@PYSOP</strong></p>

            </div>
        </div>
    );
}

export default Footer;