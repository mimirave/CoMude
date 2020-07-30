
    // This will run when a bookmark is created.
chrome.bookmarks.onCreated.addListener(function (id, bookmarkInfo) {
  
        window.open("https://www.a2gov.org/departments/police/Pages/default.aspx", "_blank")
        console.log("Dangerous triggering event fired: police help requested")

});

