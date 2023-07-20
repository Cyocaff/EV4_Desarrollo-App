function returnLogin(){
    var Change = document.getElementById("maindiv");

    Change.innerHTML = "";
    Change.innerHTML += `
    <table id = 'logintable'  >
    <tr>
        <td id = 'theader'>
            <h1>Inicio de sesión</h1>
        </td>
    </tr>
    <tr>
        <td>
            <table>
                <tr>
                    <td>
                        <h2 id = 'inputhead1'>
                            Rut:
                        </h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" id = 'inputrut'>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2 id = 'inputhead2'>
                            Contraseña:
                        </h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" id = 'inputcon'>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onclick="LoginUser(inputrut.value,inputcon.value)">
                            Ingresar
                        </button>
                        <h5>
                            Olvidó su contraseña?
                            Si olvidó su contraseña puede 
                        </h5>
                        <h5>
                            escribir un mail para recuperarla.
                            <strong> gimnasioxyz@gymnxyz.cl </strong> 
                        </h5>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    </table>
`; 
}






