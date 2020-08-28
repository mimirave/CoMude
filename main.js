let levelOnePrompt = ["In general, do you feel sad?", "Did you eat breakfast today?", "Are you safe?"];
let levelTwoPrompt = ["Do you hear a lot of loud fighting in your house?", "Do you prefer to be in your own bedroom when at home?", "Do you feel valued at home?"]
let levelThreePrompt = ["Are you positive that you will eat dinner tonight and tomorrow?", "Has anyone in your house hurt you recently?", "Has someone in your house made you feel unworthy of love?"]
sessionStorage.setItem("Mild", JSON.stringify(levelOnePrompt));
sessionStorage.setItem("Medium", JSON.stringify(levelTwoPrompt));
sessionStorage.setItem("Intense", JSON.stringify(levelTheePrompt));

function startFunction(){
  document.GetElementByID("content").innerHTML = JSON.parse(sessionStorage.getItem(levelTwoPrompt));
}

function myFunction(data) {
  // Get the existing data
if (sessionStorage.getItem('levelOneANS') === null) {
    //Initialize the array 
    var levelOneANS= []; 
    //Add to array
    levelOneANS.push(data);
    //Set to sessionStorage 
    sessionStorage.setItem('levelOneANS', JSON.stringify(levelOneANS));
} else {
// Get elements from sessionStorage 
var tempArr = JSON.parse(sessionStorage.getItem('levelOneANS'));
// Add element to array
tempArr.push(data);
// Re-set back to sessionStorage 
sessionStorage.setItem('levelOneANS', JSON.stringify(tempArr));
  }
}

