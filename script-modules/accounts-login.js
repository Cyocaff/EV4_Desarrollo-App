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
                alert('User is an xd3')
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
    location.reload(); 
  }


function checkLoggedIn() {
  const loggedInUserRut = localStorage.getItem('loggedInUserRut');
  const loggedInUserPassword = localStorage.getItem('loggedInUserPassword');

  fetch('/script-modules/json-db/users.json')
    .then(response => response.json()) // Parse the JSON data
    
    .then(data => {
        
      const users = data.users;
      
      const matchedUser = users.find(user => user.rut === loggedInUserRut && user.password === loggedInUserPassword);

      if (matchedUser) {
        alert('User is logged in');
      } else {
        alert('User is not logged in'); 
      }
    })
    .catch(error => {
      console.error('Error', error);
    });
}