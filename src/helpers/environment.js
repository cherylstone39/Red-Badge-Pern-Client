let APIURL = '';

switch(window.localhost.hostname) {
    
    case 'localhost' || '127.0.0.1':

    APIURL = 'http://localhost:3000';
    break;

    case 'my-cs-clientsugarshackapp.herokuapp.com':
        APIURL = 'https://my-cs-clientsugarshackapp.herokuapp.com'

}

export default APIURL;