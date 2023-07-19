function LoginUser(userRut,UserPass){
    fetch('../json-db/users.json')
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
            alert(matchedUser.type);
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
  }

