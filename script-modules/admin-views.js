const typOfUser = localStorage.getItem();
function checkLoggedIn() {
    const loggedInUserId = localStorage.getItem('loggedInUserId');
  
    if (loggedInUserId) {
      console.log('User is logged in');
    } else {
      console.log('User is not logged in');
    }
  }