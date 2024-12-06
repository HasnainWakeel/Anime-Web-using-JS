var logOut = () => {
    localStorage.removeItem('loggedInUsers');
    window.location.replace('../../index.html')
}