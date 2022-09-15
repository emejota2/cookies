import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils'
import Cookies from 'js-cookie'
import axios from 'axios'
import './Login.css'

const Login = () => {
    const [usuario, setUsuario] = useState('')
    const [password, setPass] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const data = {
        usuario,
        password,
        "rol": "admin"
    }

    const ingresar = async () => {
        const response = await axios.post(`${BASE_URL}/login`, data)
        console.log(response.data)
        if(response.data.error){
            return setError(response.data.msg)
        } else {
            if (response.data.info[0].user_type === 'user') {
                Cookies.set('usuario', response.data.info[0].usuario, {path: '/'})
                Cookies.set('user_type', response.data.info[0].user_type, {path: '/'})
                navigate('/lector')
            } else {
                Cookies.set('usuario', response.data.info[0].usuario, {path: '/'})
                Cookies.set('user_type', response.data.info[0].user_type, {path: '/'})
                navigate('/home')
            }
        }
    }

    return (
    <div className='contenedorLogin'>
        <div className='formLogin shadow'>
            <h2>Mi empresa</h2>
            {
                error ?
                <div className="alert alert-danger" role="alert">
                    {error}                
                </div>
                : ''
            }
            <form>
                <div className='mb-2'>
                    <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} className='form-control' placeholder='Ingrese su usuario'></input>
                </div>
                <div className='mb-2'>
                    <input type="password" value={password} onChange={(e) => setPass(e.target.value)} className='form-control' placeholder='Ingrese su contraseña'></input>
                </div>
                <div className='d-grid gap-2'>
                    <button type="button" className="btn btn-ingresar" onClick={ingresar}>Ingresar</button>
                </div>
            </form>
        </div>



    </div>
  )
}

export default Login