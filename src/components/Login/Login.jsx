import "./login.css"

const Login = () => {
    return (
        <main className='contenedorlogin'>
            <div className="contenedorformulario">
                <div className="input-group mb-3">

                    <span className="input-group-text" id="basic-addon1">
                        usuario
                    </span>
                    <input type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">

                    <span className="input-group-text" id="basic-addon1">
                        contraseña
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                
                </div>
            
                <button type="button" className="btn btn-primary 1">Primary</button>
            </div>    
        </main>

    );
}

export default  Login