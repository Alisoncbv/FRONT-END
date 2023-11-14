import React from "react";
import './Table.css';
<script src="https://kit.fontawesome.com/480a8b9254.js" crossorigin="anonymous"></script>;

const Table = () => {
    return(
            <table className="container-table">
                <tr>
                    <td><i class="fa-solid fa-droplet"></i></td>
                    <td>Tomar agua nos da vida, pero tomar conciencia nos dara agua. Tomar agua nos da vida, pero tomar conciencia nos dara agua</td>
                    <td class="td-imagen" rowspan="2"><center><img class="img-tabla" src={require(`../../../img/img-tabla.jpg`)}/></center></td>
                    <td><i class="fa-solid fa-droplet"></i></td>
                    <td>Tomar agua nos da vida, pero tomar conciencia nos dara agua. Tomar agua nos da vida, pero tomar conciencia nos dara agua</td>
                </tr>
              
                <tr>
                    <td><i class="fa-solid fa-droplet"></i></td>
                    <td>Tomar agua nos da vida, pero tomar conciencia nos dara agua. Tomar agua nos da vida, pero tomar conciencia nos dara agua</td>
                    <td><i class="fa-solid fa-droplet"></i></td>
                    <td>Tomar agua nos da vida, pero tomar conciencia nos dara agua. Tomar agua nos da vida, pero tomar conciencia nos dara agua</td>
                </tr>
        </table>
    );
}

export default Table;