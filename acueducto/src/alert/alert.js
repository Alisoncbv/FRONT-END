import React from "react";
import swal from "sweetalert";

const Alerta = ( {nameButton} ) => {

    const actualizarA=()=>{
        swal({
            title: "Actualizar Afiliado",
            text:"¿Desea actualizar los datos de este afiliado con la información diligenciada en el formulario de modificar afiliado?.",
            icon: "warning",
            button: ["No", "Si"]
        })
    }

    const actualizarN=()=>{
        swal({
            title: "Actualizar Novedad",
            text:"Una vez marcada como solucionada no podrá actualizar y/o renovar la novedad",
            icon: "warning",
            button: ["Cancelar", "Aceptar"]
        })
    }

    const noExiste=()=>{
        swal({
            title: "Usuario Inexistente",
            text:"El número de documento no hace referencia a ningún afiliado registrado.",
            icon: "error"
        })
    }

    const contrato=()=>{
        swal({
            title: "Contrato existente",
            text:"El proceso de establecer contrato no se puede realizar porque ya existe un contrato para ese afiliado",
            icon: "warning"
        })
    }

    const usuarioI=()=>{
        swal({
            title: "Usuario Inexistente",
            text:"Afiliado inexistente, verifique el número de documento.",
            icon: "error",
            button: "Aceptar"
        })
    }

    const ordenPago=()=>{
        swal({
            text:"La orden de pago se genero correctamente.",
            icon: "success",
        })
    }




    return(
        <div className="botones">

            <button onClick={()=>actualizarA()}>Actualizar Afiliado</button>
            <button onClick={()=>actualizarN()}>Actualizar Novedad</button>
            <button onClick={()=>noExiste()}>Usuario no existe</button>
            <button onClick={()=>contrato()}>Contrato registrado</button>
            <button onClick={()=>usuarioI()}>Usuario Inexistente</button>
            <button onClick={()=>ordenPago()}>Orden de pago</button>



        </div>
    );
}

export default Alerta;

