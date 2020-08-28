let levelOnePrompt = ["In general, do you feel sad?", "Did you eat breakfast today?", "Are you safe?"];
sessionStorage.setItem("Mild", JSON.stringify(levelOnePrompt));
let levelOneANS = [];

function myFunction(data) {
  // Get the existing data
if (sessionStorage.getItem('levelOneANS') === null) {
    //Initialize the array 
    var levelOneANS= []; 
    //Add to array
    levelOneANS.push(data);
    //Set to sessionStorage 
    sessionStorage.setItem('levelOne', JSON.stringify(levelOne));
} else {
// Get elements from sessionStorage 
var levelOne = JSON.parse(sessionStorage.getItem('levelOne'));
// Add element to array
levelOne.push(data);
// Re-set back to sessionStorage 
sessionStorage.setItem('levelOne', JSON.stringify(levelOne));
  }
}

