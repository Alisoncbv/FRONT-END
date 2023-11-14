import React from "react";
import "./RegisterPO.css";
import { useForm } from "react-hook-form";
import Form from "../../form/Form";
import Button from "../../button/Button";

const RegisterPO = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div className="container-registerPO">
            <h1 className="namePO">Registrar Orden de pago</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Form nameInput={"Consecutivo"} typeInput={"number"} {...register('consecutivo',{
                        required:true
                    })}/>
                {errors.consecutivo?.type === 'required' && <p>Este campo es obligatorio</p>} 

                <Form nameInput={"N°Documento"} typeInput={"number"} {...register('documentoOP',{
                        required:true
                    })}/>
                {errors.documentoOP?.type === 'required' && <p>Este campo es obligatorio</p>} 

                <Form nameInput={"Nombre"} typeInput={"text"} {...register('nombreOP',{
                        required:true
                    })}/>
                {errors.nombreOP?.type === 'required' && <p>Este campo es obligatorio</p>} 

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
                
                <Form nameInput={"Total"} typeInput={"number"} {...register('total',{
                        required:true
                    })}/>
                {errors.total?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Button nameButton={"Generar"}/>
            </form>
    

        </div>
    );
}

export default RegisterPO;