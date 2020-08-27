
// initialization work 
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "id": "mainMenu",
        "title": "CoMude",
        "contexts": ["page"],

    })
});