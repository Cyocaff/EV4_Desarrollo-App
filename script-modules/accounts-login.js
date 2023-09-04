//Sobre las funciones del script.
//El script contiene funciones principalmente escritas en ingles
//con nombres lo mas explicativos posibles asi como con variables
//que tienen nombres que intentan dejar claro lo que hacen,
// mas informacion en las funciones...
// 
//Sobre el funcionamiento general...
// la aplicacion carga varios strings grandes
// de html hacia index.html con tal de dar una 
// experiencia mas fluida, hay un archivo JSON
// intentando imitar una base de datos (Nunca
// se paso en clases como conectar una BD)
// para guardar datos basicos y lo otro es generado,
// guardado y eliminado con localstorage. 
//
//El programa usa el archivo JSON para validar las cuentas 
// usadas para las pruebas asi como la cuenta del primer
// administrador, dependiendo de los datos ingresados
// (password y rut) el usuario o no podra entrar o 
// entrara a la cuenta que le corresponda segun su tipo.
//
// Las claves y rut's para ingresar se pueden encontrar
// en el archivo JSON y como administrador se pueden
// crear nuevas cuentas de admin, instructor, client.
// para su uso.

// Debido a las pocas diferencias algunas pantallas de 'instructor' y 'client' son las mismas.
// Esto no afecta al funcionamiento ya que las funciones dependen de el tipo se usuario en ciertos casos.


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


<center>
  <div id = 'logo' onload="checkLoggedIn()">
      <img src="/img/logo.png" alt="">

      <table id = 'nav'>
          <tr>
              <td id = 'nav-button-1' onclick="bdView()">
                  <center><h5>Panel de administracion (BD)</h5></center>
              </td>
              <td id = 'nav-button-2' onclick="calendarAdmin()">
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
  #adminProfile{
      background-color: white;
      border: solid black 2px;
      width: auto;
      padding-bottom: 50px;
  }#adminProfile h2{
      margin-top: 20px;
  }
  #profileAdmin td{
      height: 80px;
      width: 120px;
      border: solid black 1px;
  }
  #editData{
      background-color: blue;
      color: white;
      border: solid black 1px;
      border-radius: 15px;
      height: 80px;
      width: 240px;
      margin-top: 30px;
  }
  


</style>

<center>
<div id = 'logo'>
    <img src="/img/logo.png" alt="">

    <table id = 'nav'>
        <tr>
            <td id = 'nav-button-1' onclick="bdView()">
                <center><h5>Panel de administracion (BD)</h5></center>
            </td>
            <td id = 'nav-button-2' onclick="calendarAdmin()">
                <center><h5>Horario y administracion de horas</h5></center>
            </td>
            <td id = 'nav-button-3' onclick="adminProfile()">
                <center><h5>Adminstrar perfil y datos de usuario</h5></center>
            </td>
        </tr>
    </table>
    <table>
        <tr>
            <td id = 'logoutButton' onclick = 'Logout()'>
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
        <table id = 'profileAdmin'>
            <tr>
                <td>
                   <h3>Rut: </h3>
                </td>
                <td>
                    <h3 id = 'userRut'></h3>
                </td>
            </tr>


            <tr>
                <td>
                    <h3>Contraseña: </h3>
                </td>
                <td>
                    <h3 id = 'userPass'></h3>
                </td>
            </tr>

            
            <tr>
                <td>
                    <h3>Nombre: </h3>
                </td>
                <td>
                    <h3 id = 'userName'></h3>
                </td>
            </tr>


            <tr>
                <td>
                    <h3>Apellido: </h3>
                </td>
                <td>
                    <h3 id = 'userLastName'></h3>
                </td>
            </tr>


            <tr>
                <td>
                    <h3>Tipo: </h3>
                </td>
                <td>
                    <h3 id = 'userType'></h3>
                </td>
            </tr>
        </table>
    </tr>
    <tr>
        <td>
            <div id = 'editData' onclick="editData()">
                <h2>Editar Informacion</h2>
            </div>     
        </td>
    </tr>
    </table>
</div>
<div id = 'editSpace'>

</div>
</center>
`; 
Write();
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

function bdView(){


    {
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
        #BD-View-Table{
            background-color: white;
            border: solid black 1px;
            font-size: 50%;
            
        }
        #BD-View-Table th{
            border: solid black 1px;
            

        }
        .user-table {
            width: 100%;
            table-layout: fixed; 
        }


        .user-table th {
            padding: 10px; 
            text-align: left;
        }


        .user-table td {
            padding: 5px;
            text-align: left; 
        }

        #userTableBody td{
            border: solid black 1px;
        }
        #addNewUserForm{
            background-color: white;
            border: solid black 2.5px;
            padding-top: 15px;
            margin-top: 15px;
            padding-bottom: 50px;
        }
        

    </style>


    <center>
    <div id = 'logo' onload="checkLoggedIn()">
            <img src="/img/logo.png" alt="">

            <table id = 'nav'>
            <tr>
                <td id = 'nav-button-1' onclick="bdView()">
                    <center><h5>Panel de administracion (BD)</h5></center>
                </td>
                <td id = 'nav-button-2' onclick="calendarAdmin()">
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
            <hr>
        </div>
        
        
    </center>
    <center>
        <div id = 'BD-View-Div'>
                <table id = 'BD-View-Table'>
                    <thead>
                      <tr>
                        <th>Rut</th>
                        <th>Contraseña</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Tipo</th>
                        <th>Mail</th>
                      </tr>
                    </thead>
                    <tbody id="userTableBody">
                      <!-- Table body will be filled with user information -->
                    </tbody>
                  </table>


                <table id = 'addNewUserForm'>
                <tr>
                    <td>
                            <h2>Añadir nuevo usuario</h2>
                        <form id="newUserForm">
                            <label for="newRut">Rut:</label>
                            <input type="text" id="newRut" required><br>
                          
                            <label for="newPassword">Contraseña:</label>
                            <input type="password" id="newPassword" required><br>
                          
                            <label for="newName">Nombre:</label>
                            <input type="text" id="newName" required><br>
                          
                            <label for="newLastname">Apellido:</label>
                            <input type="text" id="newLastname" required><br>

                            <label for="newType">Tipo:</label>
                            <input type="text" id="newType" required><br>
                          
                            <label for="newMail">Mail:</label>
                            <input type="email" id="newMail" required><br>
                          
                            <button type="button" onclick="addNewUser(newRut.value,newPassword.value,newType.value,newName.value,newLastname.value,newMail.value), form.reset();">Añadir Usuario</button>
                          </form>
                          
                    </td>
                </tr>    
                <tr>
                <td>
                    <br>
                    <hr>
                    <h2>Eliminar usuario por Rut</h2>
                    <input type="text" id="deleteUserRut" placeholder="Ingrese el rut del usuario a eliminar">
                    <button onclick="deleteUser()">Eliminar Usuario</button>

                </td>
                </tr>
                </table>
        </div>
    </center>
    `; 
    };
    displayUsers();



    
}



function calendarAdmin(){
    
        var Change = document.getElementById("maindiv");
        Change.innerHTML = "";
        Change.innerHTML += `
        <style>
        html{
            font-family: Arial, Helvetica, sans-serif;                
            background-image: url("/img/background2.png");
        }

        #calendarTable{
            margin-top: 17px;
            padding-top: 15px;
            background-color: rgb(255, 255, 255);
            border: double rgb(0, 0, 0) 5px;
            border-radius: 5px;
            padding-left: 13px;
            padding-right: 13px;
            padding-bottom: 100px;
            font-size: 130%;
        }#calendarTable h1{
            color: rgb(0, 0, 0);
        }#calendarTable h2{
            color: rgb(0, 0, 0);
            margin-bottom: -3px;
        }#calendarTable hr{
            color: rgb(0, 0, 0);
            padding-bottom: 2px;
            height: 4px;
            background-color: black;
            margin-top: 5px;
        }#calendarTable h5{
            color: rgb(0, 0, 0);
            font-size: 110%;
            margin-bottom: -13px;
        }#calendarTable button{
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
        <div id = 'logo' onload="checkLoggedIn()">
            <img src="/img/logo.png" alt="">

            <table id = 'nav'>
                <tr>
                    <td id = 'nav-button-1' onclick="bdView()">
                        <center><h5>Panel de administracion (BD)</h5></center>
                    </td>
                    <td id = 'nav-button-2' onclick="calendarAdmin()">
                        <center><h5>Horario y administracion de horas</h5></center>
                    </td>
                    <td id = 'nav-button-3' onclick="adminProfile()">
                        <center><h5>Adminstrar perfil y datos de usuario</h5></center>
                    </td>
                </tr>
            </table>
            <table>
                <tr>
                    <td id = 'logoutButton' onclick = 'Logout()'>
                        <h5> Cerrar sesion </h5>
                    </td>
                </tr>
            </table>
            
            
            </button>
            <hr>
        </div>
        
        
    </center>
    <center>
        <div id="calendarDiv">
            <table id="calendarTable">
                <tr>
                    <td><button id="day1">1</button></td>
                    <td><button id="day2">2</button></td>
                    <td><button id="day3">3</button></td>
                    <td><button id="day4">4</button></td>
                    <td><button id="day5">5</button></td>
                    <td><button id="day6">6</button></td>
                    <td><button id="day7">7</button></td>
                </tr>
                <tr>
                    <td><button id="day8">8</button></td>
                    <td><button id="day9">9</button></td>
                    <td><button id="day10">10</button></td>
                    <td><button id="day11">11</button></td>
                    <td><button id="day12">12</button></td>
                    <td><button id="day13">13</button></td>
                    <td><button id="day14">14</button></td>
                </tr>
                <tr>
                    <td><button id="day15">15</button></td>
                    <td><button id="day16">16</button></td>
                    <td><button id="day17">17</button></td>
                    <td><button id="day18">18</button></td>
                    <td><button id="day19">19</button></td>
                    <td><button id="day20">20</button></td>
                    <td><button id="day21">21</button></td>
                </tr>
                <tr>
                    <td><button id="day22">22</button></td>
                    <td><button id="day23">23</button></td>
                    <td><button id="day24">24</button></td>
                    <td><button id="day25">25</button></td>
                    <td><button id="day26">26</button></td>
                    <td><button id="day27">27</button></td>
                    <td><button id="day28">28</button></td>
                </tr>
                <tr>
                    <td><button id="day29">29</button></td>
                    <td><button id="day30">30</button></td>
                    <td><button id="day31">31</button></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </center>
    `; 
    loadButtonColors();
    loadButtonID();
};


function mainClient(){
    
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
    #nav-button-1{
        border: solid black 1px;
        border-radius: 5px;
        background-color: rgb(255, 0, 0);;
        width: auto;
        height: 20%;
    }
    #nav-button-2,#nav-button-3{
        border: solid black 1px;
        border-radius: 5px;
        background-color: rgb(0, 255, 106);;
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



    <body onload="checkLoggedIn()">
        <center>
            <div id = 'logo'>
                <img src="/img/logo.png" alt="">

                <table id = 'nav'>
                    <tr>
                        <td id = 'nav-button-1' onclick="Logout()">
                            <center><h5>Cerrar sesion</h5></center>
                        </td>
                        <td id = 'nav-button-2' onclick="calendarClient()">
                            <center><h5>Horario y agendamiento de horas</h5></center>
                        </td>
                        <td id = 'nav-button-3' onclick="clientProfile()">
                            <center><h5>Adminstrar perfil y datos de usuario</h5></center>
                        </td>
                    </tr>
                </table>
                
                
                </button>
                <hr>
            </div>
            
            
        </center>
        <center>
            <div id = 'calendarDiv'>

                <table id = 'mainTableAdmin'>
                <tr>
                    <center><td>
                        <center><h1>Bienvenido a la pantalla principal</h1> </center>
                        <center><h3>Usted ha iniciado sesión como cliente.</h3> <center>
                            <center><h3>Recordatorio:</h3></center>
                            <center><h4>El Gimnasio esta disponible todos los dias</h4></center>
                            <center><h4>entre las 15:30 y 18:15 horas</h4></center>
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
                            <center><img src="/img/app-login-preview.png" alt="404" width="320" height="530"></center>
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
};


function clientProfile(){   
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
    #nav-button-1{
        border: solid black 1px;
        border-radius: 5px;
        background-color: rgb(255, 0, 0);;
        width: auto;
        height: 20%;
        }
    #nav-button-2,#nav-button-3{
        border: solid black 1px;
        border-radius: 5px;
        background-color: rgb(0, 255, 106);;
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
    #adminProfile{
        background-color: white;
        border: solid black 2px;
        width: auto;
        padding-bottom: 50px;
    }#adminProfile h2{
        margin-top: 20px;
    }
    #profileAdmin td{
        height: 80px;
        width: 120px;
        border: solid black 1px;
    }
    #editData{
        background-color: blue;
        color: white;
        border: solid black 1px;
        border-radius: 15px;
        height: 80px;
        width: 240px;
        margin-top: 30px;
    }
    
  
  
  </style>
  
  <center>
  <div id = 'logo'>
      <img src="/img/logo.png" alt="">
  
      <table id = 'nav'>
      <tr>
          <td id = 'nav-button-1' onclick="Logout()">
              <center><h5>Cerrar sesion</h5></center>
          </td>
          <td id = 'nav-button-2' onclick="calendarClient()">
              <center><h5>Horario y agendamiento de horas</h5></center>
          </td>
          <td id = 'nav-button-3' onclick="clientProfile()">
              <center><h5>Adminstrar perfil y datos de usuario</h5></center>
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
          <table id = 'profileAdmin'>
              <tr>
                  <td>
                     <h3>Rut: </h3>
                  </td>
                  <td>
                      <h3 id = 'userRut'></h3>
                  </td>
              </tr>
  
  
              <tr>
                  <td>
                      <h3>Contraseña: </h3>
                  </td>
                  <td>
                      <h3 id = 'userPass'></h3>
                  </td>
              </tr>
  
              
              <tr>
                  <td>
                      <h3>Nombre: </h3>
                  </td>
                  <td>
                      <h3 id = 'userName'></h3>
                  </td>
              </tr>
  
  
              <tr>
                  <td>
                      <h3>Apellido: </h3>
                  </td>
                  <td>
                      <h3 id = 'userLastName'></h3>
                  </td>
              </tr>
  
  
              <tr>
                  <td>
                      <h3>Tipo: </h3>
                  </td>
                  <td>
                      <h3 id = 'userType'></h3>
                  </td>
              </tr>
          </table>
      </tr>
      <tr>
          <td>
              <div id = 'editData' onclick="editData()">
                  <h2>Editar Informacion</h2>
              </div>     
          </td>
      </tr>
      </table>
  </div>
  <div id = 'editSpace'>
  
  </div>
  </center>
  `; 
  Write();
  } 

function calendarClient(){
    var Change = document.getElementById("maindiv");
    Change.innerHTML = "";
    Change.innerHTML += `
    <style>
    html{
        font-family: Arial, Helvetica, sans-serif;                
        background-image: url("/img/background2.png");
    }

    #calendarTable{
        margin-top: 17px;
        padding-top: 15px;
        background-color: rgb(255, 255, 255);
        border: double rgb(0, 0, 0) 5px;
        border-radius: 5px;
        padding-left: 13px;
        padding-right: 13px;
        padding-bottom: 100px;
        font-size: 130%;
    }#calendarTable h1{
        color: rgb(0, 0, 0);
    }#calendarTable h2{
        color: rgb(0, 0, 0);
        margin-bottom: -3px;
    }#calendarTable hr{
        color: rgb(0, 0, 0);
        padding-bottom: 2px;
        height: 4px;
        background-color: black;
        margin-top: 5px;
    }#calendarTable h5{
        color: rgb(0, 0, 0);
        font-size: 110%;
        margin-bottom: -13px;
    }#calendarTable button{
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
    #nav-button-1{
        border: solid black 1px;
        border-radius: 5px;
        background-color: rgb(255, 0, 0);;
        width: auto;
        height: 20%;
        }
    #nav-button-2,#nav-button-3{
        border: solid black 1px;
        border-radius: 5px;
        background-color: rgb(0, 255, 106);;
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
    <div id = 'logo' onload="checkLoggedIn()">
        <img src="/img/logo.png" alt="">

        <table id = 'nav'>
        <tr>
            <td id = 'nav-button-1' onclick="Logout()">
                <center><h5>Cerrar sesion</h5></center>
            </td>
            <td id = 'nav-button-2' onclick="calendarClient()">
                <center><h5>Horario y agendamiento de horas</h5></center>
            </td>
            <td id = 'nav-button-3' onclick="clientProfile()">
                <center><h5>Adminstrar perfil y datos de usuario</h5></center>
            </td>
        </tr>
    </table>
        
        
        </button>
        <hr>
    </div>
    
    
</center>
<center>
    <div id="calendarDiv">
        <table id="calendarTable">
            <tr>
                <td><button id="day1">1</button></td>
                <td><button id="day2">2</button></td>
                <td><button id="day3">3</button></td>
                <td><button id="day4">4</button></td>
                <td><button id="day5">5</button></td>
                <td><button id="day6">6</button></td>
                <td><button id="day7">7</button></td>
            </tr>
            <tr>
                <td><button id="day8">8</button></td>
                <td><button id="day9">9</button></td>
                <td><button id="day10">10</button></td>
                <td><button id="day11">11</button></td>
                <td><button id="day12">12</button></td>
                <td><button id="day13">13</button></td>
                <td><button id="day14">14</button></td>
            </tr>
            <tr>
                <td><button id="day15">15</button></td>
                <td><button id="day16">16</button></td>
                <td><button id="day17">17</button></td>
                <td><button id="day18">18</button></td>
                <td><button id="day19">19</button></td>
                <td><button id="day20">20</button></td>
                <td><button id="day21">21</button></td>
            </tr>
            <tr>
                <td><button id="day22">22</button></td>
                <td><button id="day23">23</button></td>
                <td><button id="day24">24</button></td>
                <td><button id="day25">25</button></td>
                <td><button id="day26">26</button></td>
                <td><button id="day27">27</button></td>
                <td><button id="day28">28</button></td>
            </tr>
            <tr>
                <td><button id="day29">29</button></td>
                <td><button id="day30">30</button></td>
                <td><button id="day31">31</button></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
</center>
`; 
loadButtonColors();
loadButtonID();
};


function instructorMain(){
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
    #nav-button-1{
        border: solid black 1px;
        border-radius: 5px;
        background-color: rgb(255, 0, 0);;
        width: auto;
        height: 20%;
    }
    #nav-button-2,#nav-button-3{
        border: solid black 1px;
        border-radius: 5px;
        background-color: rgb(0, 255, 106);;
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



<body onload="checkLoggedIn()">
<center>
    <div id = 'logo'>
        <img src="/img/logo.png" alt="">

        <table id = 'nav'>
        <tr>
            <td id = 'nav-button-1' onclick="Logout()">
                <center><h5>Cerrar sesion</h5></center>
            </td>
            <td id = 'nav-button-2' onclick="calendarClient()">
                <center><h5>Horario y agendamiento de horas</h5></center>
            </td>
            <td id = 'nav-button-3' onclick="clientProfile()">
                <center><h5>Adminstrar perfil y datos de usuario</h5></center>
            </td>
        </tr>
    </table>
        
        
        </button>
        <hr>
    </div>
    
    
</center>
<center>
    <div id = 'calendarDiv'>

        <table id = 'mainTableAdmin'>
        <tr>
            <center><td>
                <center><h1>Bienvenido a la pantalla principal</h1> </center>
                <center><h3>Usted ha iniciado sesión como Instructor.</h3> <center>
                    <center><h3>Recordatorio:</h3></center>
                    <center><h4>El Gimnasio esta disponible todos los dias</h4></center>
                    <center><h4>entre las 15:30 y 18:15 horas</h4></center>
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
                    <center><img src="/img/app-login-preview.png" alt="404" width="320" height="530"></center>
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




//Busca un usuario en la BD con ese nombre y password


function LoginUser(userRut, UserPass) {
    let isLocalUser = false;
  
    fetch('/script-modules/json-db/users.json')
      .then(response => response.json())
      .then(data => {
        const users = data.users;
        const matchedUser = users.find(user => user.rut === userRut && user.password === UserPass);
  
        if (matchedUser) {
          localStorage.setItem('loggedInUserRut', userRut);
          localStorage.setItem('loggedInUserPassword', UserPass);
          localStorage.setItem('loggedInUserName', matchedUser.name);
          localStorage.setItem('loggedInUserLastName', matchedUser.lastname);
          localStorage.setItem('loggedInUserTypeOfUser', matchedUser.type);
          if (matchedUser.type === 'admin') {
            adminMain();
          } else if (matchedUser.type === 'instructor') {
            instructorMain();
          } else if (matchedUser.type === 'client') {
            mainClient();
          }
          return;
        }
  
        const newUsers = JSON.parse(localStorage.getItem('newUsers')) || [];
        const matchedLocalUser = newUsers.find(user => user.rut === userRut && user.password === UserPass);
  
        if (matchedLocalUser) {
          isLocalUser = true; 
          localStorage.setItem('loggedInUserRut', userRut);
          localStorage.setItem('loggedInUserPassword', UserPass);
          localStorage.setItem('loggedInUserName', matchedLocalUser.name);
          localStorage.setItem('loggedInUserLastName', matchedLocalUser.lastname);
          localStorage.setItem('loggedInUserTypeOfUser', matchedLocalUser.type);

          if (matchedLocalUser.type === 'admin') {
            adminMain();
          } else if (matchedLocalUser.type === 'instructor') {
            instructorMain();
          } else if (matchedLocalUser.type === 'client') {
            mainClient();
          }

          return;
        }
        alert('Ingreso de datos invalido');
      })
      .catch(error => {
        console.error('Error', error);
      });
  }
  

  //Debido a las limitaciones no se puede usar una DB real, por lo que para solucionar el problema
  // del 'Logout' se eliminara solo el loggedIn de localstorage de usuarios de JSON,
  // esto se hizo al principio, tantas cosas han cambiado que probablemente no haya problema en
  // cambiarlo, pero aun asi, funciona bien como esta.

  function Logout() {
    const isLocalUser = localStorage.getItem('isLocalUser') === 'true';

    if (isLocalUser) {
      returnToLogin();
    } else {
        localStorage.removeItem('loggedInUserRut');
        localStorage.removeItem('loggedInUserPassword');
        localStorage.removeItem('loggedInUserName');
        localStorage.removeItem('loggedInUserLastName');
        localStorage.removeItem('loggedInUserTypeOfUser');
        returnToLogin();
    }
  }

//Verifica si el usuario esta logeado , si no lo esta lo devuelve a la pantalla de login.

function checkLoggedIn() {
  const loggedInUserRut = localStorage.getItem('loggedInUserRut');
  const loggedInUserPassword = localStorage.getItem('loggedInUserPassword');
  const loggedInUserTypeOfUser = localStorage.getItem ('loggedInUserTypeOfUser');
  fetch('/script-modules/json-db/users.json')
    .then(response => response.json()) 
    
    .then(data => {
        
      const users = data.users;
      
      const matchedUser = users.find(user => user.rut === loggedInUserRut && user.password === loggedInUserPassword);

      if (matchedUser) {
        if(loggedInUserTypeOfUser === 'admin'){
          adminMain()
        }
        if(loggedInUserTypeOfUser === 'instructor'){
          instructorMain();
        }
        if(loggedInUserTypeOfUser === 'client'){
            mainClient();
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
function Write(){

    const loggedInUserRut = localStorage.getItem('loggedInUserRut');
    const tdUserRut = document.getElementById("userRut");
    tdUserRut.innerHTML += loggedInUserRut;

    const loggedInUserPassword = localStorage.getItem('loggedInUserPassword');
    const tdUserPass = document.getElementById("userPass");
    tdUserPass.innerHTML += loggedInUserPassword;

    const loggedInUserName = localStorage.getItem ('loggedInUserName');
    const tdUserName = document.getElementById("userName");
    tdUserName.innerHTML += loggedInUserName;

    const loggedInUserLastName = localStorage.getItem ('loggedInUserLastName');
    const tdUserLastName = document.getElementById("userLastName");
    tdUserLastName.innerHTML += loggedInUserLastName;

    const loggedInUserTypeOfUser = localStorage.getItem ('loggedInUserTypeOfUser');
    const tdTypeOfUser = document.getElementById("userType");
    tdTypeOfUser.innerHTML += loggedInUserTypeOfUser;
}

function editData(){
    var Change = document.getElementById("editSpace");
    Change.innerHTML = "";
    Change.innerHTML += `
	<style>
		#newData{
			background-color: white;
			border: solid black 1px;
		}
	</style>
	<center><table id = 'newData'>
		<tr>
			<td>
				<h2>Nueva informacion: </h2>
			</td>
		</tr>
		<tr>
			<td>
			Nombre:<input type="text" name="N1" id="N1">
			<br>Apellido:<input type="text" name="N2" id="N2">
			<br>Contraseña:<input type="text" name="N3" id="N3">	
			<br><center><input type="button" value="Guardar info" onclick="editInfo(N1.value,N2.value,N3.value)"></center>
			</td>
		</tr>
	</table></center>
`; 
};


//SE USA CON TAL DE MODIFICAR INFORMACION DE LOS USUARIOS

//Funcion incompleta, por temas de tiempo no se pudo terminar el correcto
// desarrollo de la funcion, modifica los datos del usuario hasta recargar pantalla.
function editInfo(X, Y, Z) {

    const isLocalUser = localStorage.getItem('isLocalUser') === 'true';

    if (isLocalUser) {



        const newUsers = JSON.parse(localStorage.getItem('newUsers')) || [];
        const thisLocalUser = newUsers.find(user => user.rut === userRut && user.password === UserPass);

        localStorage.setItem(thisLocalUser.password,Z );
        localStorage.setItem('loggedInUserName', thisLocalUser.name,X);
        localStorage.setItem('loggedInUserLastName', thisLocalUser.lastname,Y);

        const tdUserPass = document.getElementById("userPass");
        tdUserPass.innerHTML = loggedInUserPassword;
    
        const tdUserName = document.getElementById("userName");
        tdUserName.innerHTML = loggedInUserName;
    
        const tdUserLastName = document.getElementById("userLastName");
        tdUserLastName.innerHTML = loggedInUserLastName;
        alert('Datos guardados!');

        const userType = localStorage.getItem('loggedInUserTypeOfUser');

        if (userType === 'admin') {
            adminProfile();
        }else{
            clientProfile();
        }



        

    }else{

    }


    localStorage.setItem('loggedInUserPassword', Z);
    localStorage.setItem('loggedInUserName', X);
    localStorage.setItem('loggedInUserLastName', Y);

    const loggedInUserPassword = localStorage.getItem('loggedInUserPassword');
    const loggedInUserName = localStorage.getItem('loggedInUserName');
    const loggedInUserLastName = localStorage.getItem('loggedInUserLastName');

    const tdUserPass = document.getElementById("userPass");
    tdUserPass.innerHTML = loggedInUserPassword;

    const tdUserName = document.getElementById("userName");
    tdUserName.innerHTML = loggedInUserName;

    const tdUserLastName = document.getElementById("userLastName");
    tdUserLastName.innerHTML = loggedInUserLastName;

    alert('Datos guardados!');
    const userType = localStorage.getItem('loggedInUserTypeOfUser');
    if (userType === 'admin') {
        adminProfile();
    }else{
        clientProfile();
    }
}



//SE USA CON TAL DE MOSTRAR LOS USUARIOS EN LA BD

// Trae usuarios de localstorage + los usuarios originales del archivo .json.

function displayUsers() {
    fetch('/script-modules/json-db/users.json')
      .then(response => response.json())
      .then(data => {
        const users = data.users;
  
  
        const newUsers = JSON.parse(localStorage.getItem('newUsers')) || [];
  
  
        const allUsers = [...users, ...newUsers];
  
        const tableBody = document.getElementById("userTableBody");
  
        allUsers.forEach(user => {
          const tr = document.createElement("tr");
  
          const tdRut = document.createElement("td");
          tdRut.textContent = user.rut;
  
          const tdPass = document.createElement("td");
          tdPass.textContent = user.password;
  
          const tdName = document.createElement("td");
          tdName.textContent = user.name;
  
          const tdLastname = document.createElement("td");
          tdLastname.textContent = user.lastname;
  
          const tdType = document.createElement("td");
          tdType.textContent = user.type;
  
          const tdMail = document.createElement("td");
          tdMail.textContent = user.mail;
  
          tr.appendChild(tdRut);
          tr.appendChild(tdPass);
          tr.appendChild(tdName);
          tr.appendChild(tdLastname);
          tr.appendChild(tdType);
          tr.appendChild(tdMail);
  
          tableBody.appendChild(tr);
        });
      })
      .catch(error => {
        console.error('Error', error);
      });
  }





  // Agregar nuevos usuarios a localstorage, en algunas funciones se refiere a estos usuarios como
  // 'localUser' 

  function addNewUser(A, B, C, D, E, F) {
    let newUsers = JSON.parse(localStorage.getItem('newUsers')) || [];
  
    const newUser = {
      rut: A,
      password: B,
      type: C,
      name: D,
      lastname: E,
      mail: F
    };
  
    newUsers.push(newUser);
  
    localStorage.setItem('newUsers', JSON.stringify(newUsers));
  
    const tableBody = document.getElementById("userTableBody");
    const tr = document.createElement("tr");
  
    const tdRut = document.createElement("td");
    tdRut.textContent = A;
  
    const tdPass = document.createElement("td");
    tdPass.textContent = B;
  
    const tdName = document.createElement("td");
    tdName.textContent = D;
  
    const tdLastname = document.createElement("td");
    tdLastname.textContent = E;
  
    const tdType = document.createElement("td");
    tdType.textContent = C;
  
    const tdMail = document.createElement("td");
    tdMail.textContent = F;
  
    tr.appendChild(tdRut);
    tr.appendChild(tdPass);
    tr.appendChild(tdName);
    tr.appendChild(tdLastname);
    tr.appendChild(tdType);
    tr.appendChild(tdMail);
  
    tableBody.appendChild(tr);
  }  


//SE UTILIZAN CONDICIONALES PARA MANEJAR EL CALENDARIO CON COLORES,
// LOS INSTRUCTORES PUEDEN MARCAR DE AZUL, INDICANDO QUE UN DIA ESTA DISPONIBLE PARA CLASES
// LOS CLIENTES PUEDEN MARCAR LOS DIAS AZULES DE MORADO, INDICANDO QUE HABRA ASISTENCIA,
// PARA CLIENTES E INSTRUCTORES, SUS RUT SE GUARDAN EN LOCAL STORAGE PARA LUEGO INDICAR QUIENES
// VAN A ASISTIR, MIENTRAS QUE LOS ADMINISTRADORES PUEDEN BLOQUEAR Y ELIMINAR SESIONES USANDO EL COLOR
// ROJO, EN ESTE CASO NO SE GUARDA EN LOCALSTORAGE INFORMACION ALGUNA.

//Funcion no terminada por falta de tiempo, se puede ver el uso de localStorage, en caso de completarse,
// deberia guardar los datos del usuario como asistente en la 'DB' de localstorage como asistente a cierta clase y dia.


function toggleButtonColor(day) {
    const userType = localStorage.getItem('loggedInUserTypeOfUser');
    const button = document.getElementById(`day${day}`);
    const color = localStorage.getItem(`day${day}`);

    if (userType === 'client') {
        if (color === 'blue') {
            button.style.backgroundColor = 'purple';
            localStorage.setItem(`day${day}`, 'purple');
        }
    } else if (userType === 'instructor') {
        const button = document.getElementById(`day${day}`);
        if (button.style.backgroundColor != 'red'){
            if (button.style.backgroundColor === 'black') {
                button.style.backgroundColor = 'blue';
                localStorage.setItem(`day${day}`, 'blue');
            } else {
                button.style.backgroundColor = 'black';
                localStorage.removeItem(`day${day}`);
            }
        }
        
    } else {
        if (color === 'red') {
            button.style.backgroundColor = 'black';
            localStorage.setItem(`day${day}`, 'black');
        } else {
            button.style.backgroundColor = 'red';
            localStorage.setItem(`day${day}`, 'red');
        }
    }
}



function loadButtonColors() {
    for (let day = 1; day <= 31; day++) {
        const color = localStorage.getItem(`day${day}`);
        if (color) {
            document.getElementById(`day${day}`).style.backgroundColor = color;
        }
    }
}

function loadButtonID(){
    for (let day = 1; day <= 31; day++) {
        document.getElementById(`day${day}`).addEventListener('click', () => toggleButtonColor(day));
    }
}

function deleteUser() {
    const loggedInUserRut = localStorage.getItem('loggedInUserRut');
    const userType = localStorage.getItem('loggedInUserTypeOfUser');
    const deleteUserRutInput = document.getElementById('deleteUserRut');

    if (userType === 'admin') {
        const userRutToDelete = deleteUserRutInput.value.trim();


        if (userRutToDelete === loggedInUserRut) {
            alert('No puedes eliminar al administrador actual.');
            return;
        }

        const newUsers = JSON.parse(localStorage.getItem('newUsers')) || [];
        const userIndex = newUsers.findIndex(user => user.rut === userRutToDelete);

        if (userIndex !== -1) {
            newUsers.splice(userIndex, 1); 
            localStorage.setItem('newUsers', JSON.stringify(newUsers)); 


            alert('Usuario eliminado correctamente.');
        } else {
            alert('El usuario con el rut ingresado no fue encontrado en el local storage.');
        }
    } else {
        alert('Solo los administradores pueden eliminar usuarios.');
    }
    
}