let APIURL = '';

switch(window.location.hostname) {
    
    case 'localhost' || '127.0.0.1':

    APIURL = 'http://localhost:3000';
    break;

    case 'cs-my-clientsugarshackapp.herokuapp.com':
        APIURL = 'https://cs-my-clientsugarshackapp.herokuapp.com'

}

export default APIURL;