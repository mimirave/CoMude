
// Listen for messages
//chrome.runtime.onMessage.addListener(receiver);

   document.addEventListener("DOMContentLoaded", function(event) {
       // - Code to execute when all DOM content is loaded. 
       console.log('DOM loaded...'); 
    })




/*console.log('attempting to complete authorization for gmail...');

 // Enter an API key from the Google API Console:
  var apiKey = 'AIzaSyCjrw7zZzZatxtSk5Ww_3OGCVfEegbHEXo';

// Enter the API Discovery Docs that describes the APIs you want to
// access. In this example, we are accessing the Gmail API, so we load
// Discovery Doc found here: https://developers.google.com/gmail/api/rest/
var discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

// Enter a client ID for a web application from the Google API Console:
//   https://console.developers.google.com/apis/credentials?project=_
// In your API Console project, add a JavaScript origin that corresponds
//   to the domain where you will be running the script.
var clientId = '212628296953-b4ke8a30bu118t3rk7ehl5sg905pvb71.apps.googleusercontent.com';

// Enter one or more authorization scopes. Refer to the documentation for
// the API or https://developers.google.com/gmail/v1/how-tos/authorizing
// for details.
var scopes = 'https://www.googleapis.com/auth/gmail.readonly'


function handleClientLoad() {
    // Load the API client and auth2 library
    gapi.load('client:auth2', initClient);
    console.log('client loaded...')
}

const authorizeButton = document.getElementById('signin');
const signoutButton = document.getElementById('signout');
console.log('button stuff');

function initClient() {
    console.log('trying to initialize client...')
    gapi.client.init({
        apiKey: apiKey,
        discoveryDocs: discoveryDocs,
        clientId: clientId,
        scope: scopes
    }).then(function () {
        console.log('listening');
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    }, function (error) {
        appendPre(JSON.stringify(error, null, 2));
    });
    console.log('client initialized...');
}

function handleAuthClick(event) {
    console.log('Signing in...');
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
    console.log('signing out...');
    gapi.auth2.getAuthInstance().signOut();
}

// Load the API and make an API call.  Display the results on the screen.
function makeApiCall() {
    console.log('making an api call...')
    gapi.client.gmail.users.drafts.get({
        'userID': 'userId',
        'id': 'draft.id'
    });
    request.execute(callback);
}
*/
