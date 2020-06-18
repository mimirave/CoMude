function myFunction() {
      // When the user clicks on <div>, open the popup
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function gamePlaySafe() {
    var yes = [];
    var no = [];
    document.getElementById("ans").addEventListener("click", function () {
        if (document.querySelector("yes")) {
            yes.push(this);
        }
        else {
            no.push(this);
        }
    });
}

function makeBook(url) {

}

    // This will run when a bookmark is created.
chrome.bookmarks.onCreated.addListener(function (id, bookmark) {
    if (id == bookmark.id) {
        window.open("https://www.a2gov.org/departments/police/Pages/default.aspx", "_blank")
        console.log("Dangerous triggering event fired: police help requested")
    }

});