
// initialization work 
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "id": "mainMenu",
        "title": "CoMude",
        "contexts": ["page"],

    });

});

let x = chrome.contextMenus.create({
    "id": "User-swap", "title": "Change User", "contexts": ["page"]
});






