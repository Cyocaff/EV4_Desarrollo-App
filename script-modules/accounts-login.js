function adminMain(){
  var Change = document.getElementById("maindiv");

  Change.innerHTML = "";
  Change.innerHTML += `
  <style>
  html{
      font-family: Arial, Helvetica, sans-serif;                
      background-image: url("/img/background2.png");
  }

  #mainTableAdmin{
      margin-top: 17px;
      padding-top: 15px;
      background-color: rgb(255, 255, 255);
      border: double rgb(0, 0, 0) 5px;
      border-radius: 5px;
      padding-left: 13px;
      padding-right: 13px;
      padding-bottom: 100px;
      font-size: 130%;
  }#mainTableAdmin h1{
      color: rgb(0, 0, 0);
  }#mainTableAdmin h2{
      color: rgb(0, 0, 0);
      margin-bottom: -3px;
  }#mainTableAdmin hr{
      color: rgb(0, 0, 0);
      padding-bottom: 2px;
      height: 4px;
      background-color: black;
      margin-top: 5px;
  }#mainTableAdmin h5{
      color: rgb(0, 0, 0);
      font-size: 110%;
      margin-bottom: -13px;
  }#mainTableAdmin button{
      font-size: 130%;
      margin-top: 21px;
      background-color: #000;
      color: rgb(0, 255, 140);
      height: 35px;
      width: auto;
      border: solid rgb(0, 255, 119) 1.4px;
      border-radius: 15px;
  }
  #logo{
      background-color: white;
      border-radius: 4px;
  }
  #logo hr {
  border: none;
  height: 1px;
  background-color: #000;
  box-shadow: 0 2px 6px rgba(0, 255, 119, 0.5);
  }

  #nav{
      width: auto;
  }#nav h5{
      margin-top: 20px;
  }
  #nav-button-1,#nav-button-2,#nav-button-3{
      border: solid black 1px;
      border-radius: 5px;
      background-color: rgb(0, 255, 140);;
      width: auto;
      height: 20%;
  }
  #logoutButton{
      margin-top: 70px;
      background-color: red;
      border-color: #000;
      border: solid 2px;
  }#logoutButton h5{
      margin-top: 17px;
  }
  
  #mainInfo{
      background-color: #000000;
      border: solid 1px;
      border-color: rgb(0, 255, 132);
      border-radius: 5px;
      color:rgb(0, 255, 132);;
      width: auto;
  }
  img{
      margin-top: 25px;
  }
  


</style>

<body>
<center>
  <div id = 'logo' onload="checkLoggedIn()">
      <img src="/img/logo.png" alt="">

      <table id = 'nav'>
          <tr>
              <td id = 'nav-button-1' onclick="goTo('usersBD')">
                  <center><h5>Panel de administracion (BD)</h5></center>
              </td>
              <td id = 'nav-button-2' onclick="goTo('calendar')">
                  <center><h5>Horario y administracion de horas</h5></center>
              </td>
              <td id = 'nav-button-3' onclick="adminProfile()">
                  <center><h5>Adminstrar perfil y datos de usuario</h5></center>
              </td>
          </tr>
      </table>
      <table>
          <tr>
              <td id = 'logoutButton' onclick = "Logout()">
                  <h5> Cerrar sesion </h5>
              </td>
          </tr>
      </table>
      
      
      </button>
      <hr>
  </div>
  
  
</center>
<center>
  <div id = 'admindiv'>

      <table id = 'mainTableAdmin'>
      <tr>
          <center><td>
              <center><h1>Bienvenido a la pantalla principal</h1> </center>
              <center><h3>Usted ha iniciado sesión como administrador.</h3> <center>
                  <hr>
          </td></center>
      </tr>
      <tr>
          <td>
              <center><h2>
                  Informacion destacada
              </h2></center>
          </td>
      </tr>
      <tr>
          <td>
              <div id = 'mainInfo'>
              <table>
                  <center><img src="/img/app-login-preview.png" alt="404" width="320" height="530">></center>
                  <center>
                      <h3>Gimnasio XYZ ahora tiene una aplicación</h3>
                      <h3>para dispositivos móvil!</h3>
                  </center>
              </table>
          </div>
          </td>
      </tr>
      </table>
  </div>
</center>
`; 
}

function adminProfile(){
  var Change = document.getElementById("maindiv");

  Change.innerHTML = "";
  Change.innerHTML += `
  <style>
            html{
                font-family: Arial, Helvetica, sans-serif;                
                background-image: url("/img/background2.png");
            }

            #mainTableAdmin{
                margin-top: 17px;
                padding-top: 15px;
                background-color: rgb(255, 255, 255);
                border: double rgb(0, 0, 0) 5px;
                border-radius: 5px;
                padding-left: 13px;
                padding-right: 13px;
                padding-bottom: 100px;
                font-size: 130%;
            }#mainTableAdmin h1{
                color: rgb(0, 0, 0);
            }#mainTableAdmin h2{
                color: rgb(0, 0, 0);
                margin-bottom: -3px;
            }#mainTableAdmin hr{
                color: rgb(0, 0, 0);
                padding-bottom: 2px;
                height: 4px;
                background-color: black;
                margin-top: 5px;
            }#mainTableAdmin h5{
                color: rgb(0, 0, 0);
                font-size: 110%;
                margin-bottom: -13px;
            }#mainTableAdmin button{
                font-size: 130%;
                margin-top: 21px;
                background-color: #000;
                color: rgb(0, 255, 140);
                height: 35px;
                width: auto;
                border: solid rgb(0, 255, 119) 1.4px;
                border-radius: 15px;
            }
            #logo{
                background-color: white;
                border-radius: 4px;
            }
            #logo hr {
            border: none;
            height: 1px;
            background-color: #000;
            box-shadow: 0 2px 6px rgba(0, 255, 119, 0.5);
            }

            #nav{
                width: auto;
            }#nav h5{
                margin-top: 20px;
            }
            #nav-button-1,#nav-button-2,#nav-button-3{
                border: solid black 1px;
                border-radius: 5px;
                background-color: rgb(0, 255, 140);;
                width: auto;
                height: 20%;
            }
            #logoutButton{
                margin-top: 70px;
                background-color: red;
                border-color: #000;
                border: solid 2px;
            }#logoutButton h5{
                margin-top: 17px;
            }
            
            #mainInfo{
                background-color: #000000;
                border: solid 1px;
                border-color: rgb(0, 255, 132);
                border-radius: 5px;
                color:rgb(0, 255, 132);;
                width: auto;
            }
            img{
                margin-top: 25px;
            }
            


        </style>
  <center>
  <div id = 'logo'>
      <img src="/img/logo.png" alt="">

      <table id = 'nav'>
          <tr>
              <td id = 'nav-button-1' onclick="goTo('usersBD')">
                  <center><h5>Panel de administracion (BD)</h5></center>
              </td>
              <td id = 'nav-button-2' onclick="goTo('calendar')">
                  <center><h5>Horario y administracion de horas</h5></center>
              </td>
              <td id = 'nav-button-3' onclick="goTo('profile')">
                  <center><h5>Adminstrar perfil y datos de usuario</h5></center>
              </td>
          </tr>
      </table>
      <table>
          <tr>
              <td id = 'logoutButton' onclick = "Logout()">
                  <h5> Cerrar sesion </h5>
              </td>
          </tr>
      </table>
      
      
      </button>
      <hr>
  </div>
  
  
</center>
<center>
  <div id = 'adminProfile'>

      <table id = 'profileAdmin'>
      <tr>
          <td>
              <h2> Datos personales:</h2>
          </td>
      </tr>
      <tr>
          <table>
              <tr>
                  <td id = 'adminData0'>
                      Rut:
                  </td>
              </tr>
              <tr>
                  <td id = 'adminData1'>
                      Contraseña:
                  </td>
              </tr>
              <tr>
                  <td id = 'adminData2'>
                      Nombre:
                  </td>
              </tr>
              <tr>
                  <td id = 'adminData3'>
                      Apellido:
                  </td>
              </tr>
              <tr>
                  <td id = 'adminData4'>
                      Tipo:
                  </td>
              </tr>
          </table>
      </tr>
      </table>
  </div>
</center>
`; 
} 


//Carga de HTML usando JS

function returnToLogin(){
  var Change = document.getElementById("maindiv");

  Change.innerHTML = "";
  Change.innerHTML += `
  <style>
  html{
      font-family: Arial, Helvetica, sans-serif;                
      background-image: url("/img/background2.png");
  }
  
  #logintable{
      margin-top: 17px;
      padding-top: 15px;
      background-color: rgba(16, 16, 16, 0.685);
      border: double black 5px;
      border-radius: 5px;
      padding-left: 13px;
      padding-right: 13px;
      padding-bottom: 100px;
      font-size: 130%;
  }#logintable h1{
      color: rgb(255, 255, 255);
  }#logintable h2{
      color: rgb(255, 255, 255);
      margin-bottom: -3px;
  }#logintable h5{
      color: rgb(255, 255, 255);
      font-size: 110%;
      margin-bottom: -13px;
  }#logintable button{
      font-size: 130%;
      margin-top: 21px;
      background-color: #000;
      color: rgb(0, 255, 140);
      height: 35px;
      width: 115px;
      border: solid rgb(0, 255, 119) 1.4px;
      border-radius: 15px;
  }
  

  #inputhead2{
      margin-top: 20px;
  }

  input{
      background-color: #000000bd;
      color: rgb(0, 255, 140);
      border-color:rgb(0, 255, 140);
      border-radius: 7px;
      height: 35px;
      width: 290px;
      font-size: 140%;
  }
  #logo{
      background-color: white;
      border-radius: 4px;
  }
  #logo hr {
  border: none;
  height: 1px;
  background-color: #000;
  box-shadow: 0 2px 6px rgba(0, 255, 119, 0.5);
  }
</style>
<div id = 'logo'>
<img src="img/logo.png" alt="">
<hr>
</div>

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




//Busca un usuario en la BD con ese nombre y password


function LoginUser(userRut,UserPass){
  
    fetch('/script-modules/json-db/users.json')
    .then(response => response.json()) 
    .then (data => {
        const users = data.users;
        const matchedUser = users.find(user => user.rut ===userRut && user.password === UserPass );

        if (matchedUser){
            alert('Logged')
            localStorage.setItem('loggedInUserRut', userRut);
            localStorage.setItem('loggedInUserPassword', UserPass);
            localStorage.setItem('loggedInUserName', matchedUser.name);
            localStorage.setItem('loggedInUserLastName', matchedUser.lastname);
            localStorage.setItem('loggedInUserTypeOfUser', matchedUser.type);
            if (matchedUser.type === 'admin'){
              adminMain();
            }
            if (matchedUser.type === 'instructor'){
                alert('User is a instructor')
            }
            if (matchedUser.type === 'client'){
                alert('User is a client')
            }

        } else{
            alert('Invalid')
        }
    })
    .catch(error => {
        console.error('Error', error);
    });
}

function Logout() {
    localStorage.removeItem('loggedInUserRut');
    localStorage.removeItem('loggedInUserPassword');
    localStorage.removeItem('loggedInUserName');
    localStorage.removeItem('loggedInUserLastName');
    localStorage.removeItem('loggedInUserTypeOfUser');
    returnToLogin();
  }


//Verifica si el usuario esta logeado , si no lo esta lo devuelve a la pantalla de login.

function checkLoggedIn() {
  const loggedInUserRut = localStorage.getItem('loggedInUserRut');
  const loggedInUserPassword = localStorage.getItem('loggedInUserPassword');
  const loggedInUserTypeOfUser = localStorage.getItem ('loggedInUserTypeOfUser');
  fetch('/script-modules/json-db/users.json')
    .then(response => response.json()) // Parse the JSON data
    
    .then(data => {
        
      const users = data.users;
      
      const matchedUser = users.find(user => user.rut === loggedInUserRut && user.password === loggedInUserPassword);

      if (matchedUser) {
        if(loggedInUserTypeOfUser === 'admin'){
          adminMain()
        }
        if(loggedInUserTypeOfUser === 'instructor'){
          //
        }
        if(loggedInUserTypeOfUser === 'client'){
          //
        }

      } else {
        returnToLogin()
      }
    })
    .catch(error => {
      console.error('Error', error);
    });
}





// Apartado de BD y Carga de datos / Edicion de datos de perfil de usuario logeado.
function Write(X,Y){
  var currentLine = Y.value;
  console.log("adminData"+currentLine)
  box = document.getElementById("adminData0")
  par = document.createElement('p')
  resultado = document.createTextNode(X)
  par.appendChild(resultado);
  box.appendChild(par)       
}
function readProfile(){
  const loggedInUserRut = localStorage.getItem('loggedInUserRut');
  const loggedInUserPassword = localStorage.getItem('loggedInUserPassword');
  const loggedInUserName = localStorage.getItem ('loggedInUserName');
  const loggedInUserLastName = localStorage.getItem ('loggedInUserLastName');
  const loggedInUserTypeOfUser = localStorage.getItem ('loggedInUserTypeOfUser');
  userData = [loggedInUserRut,loggedInUserPassword,loggedInUserName,loggedInUserLastName,loggedInUserTypeOfUser];
  for (i = 0; i < 5; i++){
    Write(userData[i],i);
  };
}