import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Lector = () => {
    const user_type = Cookies.get('user_type')
    const usuario = Cookies.get('usuario')
    const navigate = useNavigate()

    const checkUserRole = () => {
        if(user_type === 'admin'){
            navigate('/home')
        }
    }

    const checkUser = () =>{
        if (usuario === undefined) {
            navigate('/home')
        }
    }

    const cerrarSesion = () => {
        Cookies.remove('usuario')
        Cookies.remove('user_type')
        navigate('/')
    }

    useEffect(() => {
        checkUserRole()
        checkUser()
    }, [])
  return (
    <>
    <p>Lector</p>
    <button className="btn btn-danger" onClick={cerrarSesion}>Cerrar sesion</button>
    </>
  )
}

export default Lector