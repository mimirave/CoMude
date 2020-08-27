// This event is fired when the user hits "enter"
//chrome.omnibox.onInputEntered.addListener(omniChanged);
function omniChanged(text) {
    // The variable "text" has the text the user typed
    // You could open a new tab on a specific page that uses that text
    // or send a message to a content script
    // etc.
}

// This will run when a bookmark is created.
/*chrome.bookmarks.onCreated.addListener(function (id, bookmarkinfo) {
    console.log(bookmarkinfo.title);
    chrome.bookmarks.get(id, function () {
        if (id.title == "help") {
            window.open("https://www.a2gov.org/departments/police/Pages/default.aspx", "_blank")
            console.log("Dangerous triggering event fired: police help requested")
        }
    })
});*/

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
}).listen(8080);