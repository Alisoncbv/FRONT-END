import React from "react";
import "./Pay.css";
import { useForm } from "react-hook-form";
import Form from "../../form/Form";
import Button from "../../button/Button";

const Pay = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div className="container-registerP">
            
            <h1 className="namePay">Asignar Pago</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Form nameInput={"Consecutivo"} typeInput={"number"} {...register('consecutivoP',{
                        required:true
                    })}/>

                    {errors.consecutivoP?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Form nameInput={"N°Documento"} typeInput={"number"} {...register('documentoP',{
                        required:true
                    })}/>

                    {errors.documentoP?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Form nameInput={"Banco y/o entidad"} typeInput={"text"} {...register('banco',{
                        required:true
                    })}/>

                    {errors.banco?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Form nameInput={"Forma de pago"} typeInput={"text"} {...register('formaP',{
                        required:true
                    })}/>

                    {errors.formaP?.type === 'required' && <p>Este campo es obligatorio</p>}

                <label className="labelPay">Fecha de pago</label>
                <Form typeInput={"date"} {...register('fechaPago',{
                        required:true
                    })}/>

                    {errors.fechaPago?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Button nameButton={"Asignar Pago"}></Button>
            </form>
        </div>
    );
}

export default Pay;