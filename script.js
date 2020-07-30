
function start() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
        'apiKey': 'AIzaSyCjrw7zZzZatxtSk5Ww_3OGCVfEegbHEXo',
        // clientId and scope are optional if auth is not required.
        'clientId': '212628296953-b4ke8a30bu118t3rk7ehl5sg905pvb71.apps.googleusercontent.com',
        'scope': ['profile', 'https://www.googleapis.com/auth/gmail.readonly']
    }).then(function () {
        // 3. Initialize and make the API request.
        return gapi.client.request({
            'path': ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
        })
    }).then(function (response) {
        console.log(response.result);
    }, function (reason) {
        console.log('Error: ' + reason.result.error.message);
    });
};
// 1. Load the JavaScript client library.
gapi.load('client:auth2', start);
gapi.client.gmail.users.drafts.get({
    'userID': 'userId',
    'id': 'draft.id'
});
request.execute(callback);

