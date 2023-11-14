import React from "react";
import './Sidebar.css';
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="container-sidebar">
            <div className="container-header-siderbar">
                    <img
                        className="logo-sidebar"
                        src={require(`../../img/logo.png`)}
                    />
            </div>

            <div className="container-options">
                <div className="options">
                    <Link to="/tableA" style={{ textDecoration: 'none' }}>
                        <button className="button-sidebar">Afiliados</button>
                    </Link>

                    <Link to="/tableO" style={{ textDecoration: 'none' }}>
                        <button className="button-sidebar">Orden de pago</button>
                    </Link>

                    <Link to="/tableN" style={{ textDecoration: 'none' }}>
                        <button className="button-sidebar">Novedades</button>
                    </Link>

                    <Link to="/tableC" style={{ textDecoration: 'none' }}>
                        <button className="button-sidebar">Contrato</button>
                    </Link>

                    <Link to="/reports" style={{ textDecoration: 'none' }}>
                        <button className="button-sidebar">Reportes</button>
                    </Link>

                    <button className="button-sidebar">Más</button>
                </div>
            </div>

            <div className="container-footer-sidebar">
                <Button nameButton={'Soporte técnico'}/>
            </div>

            <div className="container-copyright-sidebar">
                <p className="copyright-sidebar">@PYSOF</p>
            </div>
        </div>
    );
}

export default Sidebar;