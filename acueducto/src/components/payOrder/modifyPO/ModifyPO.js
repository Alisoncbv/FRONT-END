import React from "react";
import "./ModifyPO.css";
import { useForm } from "react-hook-form";
import Form from "../../form/Form";
import Button from "../../button/Button";

const ModifyPO = () =>{

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div className="container-registerPO">
            <h1 className="namePO">Modificar Orden de pago</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Form nameInput={"Consecutivo"} typeInput={"number"}/>
                <Form nameInput={"N°Documento"} typeInput={"number"}/>
                <Form nameInput={"Lectura anterior"} typeInput={"number"} {...register('lecturaA',{
                        required:true
                    })}/>
                {errors.lecturaA?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Form nameInput={"Reconexión"} typeInput={"number"} {...register('reconexion',{
                        required:true
                    })}/>
                {errors.reconexion?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Form nameInput={"Última lectura"} typeInput={"number"} {...register('lecturaU',{
                        required:true
                    })}/>
                {errors.lecturaU?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Form nameInput={"Fecha de pago"} typeInput={"date"} {...register('fechaPago',{
                        required:true
                    })}/>
                {errors.fechaPago?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Form nameInput={"Periodo registrado"} typeInput={"text"} {...register('periodoR',{
                        required:true
                    })}/>
                {errors.periodoR?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Form nameInput={"Consumo m3"} typeInput={"text"} {...register('consumo',{
                        required:true
                    })}/>
                {errors.consumo?.type === 'required' && <p>Este campo es obligatorio</p>}
                
                <Form nameInput={"Fecha suspensión"} typeInput={"date"} {...register('fechaS',{
                        required:true
                    })}/>
                {errors.fechaS?.type === 'required' && <p>Este campo es obligatorio</p>}
                <Form nameInput={"Total"} typeInput={"number"}/>
                
                <div className="buttonsPO">
                    <table>
                        <tr>
                            <td><Button nameButton={"Guardar"}/></td>
                            <td><button className="cancelB">Cancelar</button></td>
                        </tr>
                    </table>
                </div>
                

            </form>
    

        </div>
    );
}

export default ModifyPO;