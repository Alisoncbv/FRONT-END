import React from "react";
import "./Reports.css";
import Sidebar from "../sidebar/Sidebar";

const Reports = () => {
    return(
        <div className="container-reports">

            <div className="container-right">
                <Sidebar />
            </div>

            <div className="container-left">
                <div>
                    <p>Reportes</p>
                </div>

                <div className="card-reports">

                    <div className="card-top">
                        <div className="cardR">
                            <p>Afiliados</p>
                        </div>

                        <div className="cardR">
                            <p>Orden de pago</p>
                        </div>
                    </div>

                    <div className="card-bottom">
                        <div className="cardR">
                            <p>Novedades</p>
                        </div>

                        <div className="cardR">
                            <p>Contrato</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Reports;