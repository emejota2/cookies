import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const usuario = Cookies.get('usuario')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const checkUser = () => {
        if (usuario === undefined){
            navigate('/')
            //setError('No tiene permisos para ingresar a esta pagina')
            
    }
}
    const user_type = Cookies.get('user_type')

    const checkUserRole = () => {
        if(user_type === 'user'){
            navigate('/lector')
        }
    }

    const cerrarSesion = () => {
        Cookies.remove('usuario')
        Cookies.remove('user_type')
        navigate('/')
    }

    useEffect(() => {
        checkUser()
        checkUserRole()
    }, [])

    return(
        <div>

            {error ?
            <div className="alert alert-danger" role="alert">
                {/* {error} */}
                {Swal.fire({
                title: error,
                confirmButtonText: 'Ok',
                }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire()
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
                })
            }
            </div>
                : 
                    <>
                    <p>Usuario: {usuario}</p>
                    <p>Rol: </p>
                    <button className="btn btn-danger" onClick={cerrarSesion}>Cerrar sesion</button>
                    </>
            }
        </div>
    );
}

export default Home;