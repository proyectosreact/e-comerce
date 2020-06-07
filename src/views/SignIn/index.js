import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Axios from '../../config/axios'

import Login from "../../components/Login";

const SignIn = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const onChangeData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
            
        })
    }
    const { errors, handleSubmit, register } = useForm();

    const onSubmit = async (data, e) => {
        e.target.reset();
        Axios.post('/api/auth',user)
        .then(res =>{
            console.log(res)
            console.log(res.data)
        })
        

    };

    return (
        <Login>
            <form action="/signin" onSubmit={handleSubmit(onSubmit)}>

                <div className="form-grupo">
                    <label className="labelText">Ingresar Usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        onChange={onChangeData}
                        ref={register({
                            required: {
                                value: true,
                                message: "Nombre es Requerido",
                            }
                            // maxLength: {
                            //     value: 8,
                            //     message: "No mas de 8 caracteres!",
                            // },
                            // minLength: {
                            //     value: 4,
                            //     message: "no menos de 4",
                            // },
                        })} />
                    <span className="">
                        {errors?.name?.message}
                    </span>
                </div>
                <div className="form-grupo">
                    <label className="labelText">Ingresar Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={onChangeData}
                        ref={register({
                            required: {
                                value: true,
                                message: "No olvides ingresar tu contraseña",
                             }
                            // maxLength: {
                            //     value: 8,
                            //     message: "No mas de 8 caracteres",
                            // },
                            // minLength: {
                            //     value: 4,
                            //     message: "No menos de 4 caracteres",
                            // },
                        })} />
                    <span className="">
                        {errors?.password?.message}
                    </span>
                </div>

                      <button className="btn btn-block btn-primary" type="submit" >
                    SignIn
                    </button>
  
                
            </form>
            <Link to="/recuperar">
                <h4 className="recuperar">Recuperar Contraseña</h4>
            </Link>
        </Login>
    )
}

export default SignIn