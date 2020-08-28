let levelOnePrompt = ["In general, do you feel sad?", "Did you eat breakfast today?", "Are you safe?"];
sessionStorage.setItem("Mild", JSON.stringify(levelOnePrompt));

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
var levelOneANS = JSON.parse(sessionStorage.getItem('levelOneANS'));
// Add element to array
levelOneANS.push(data);
// Re-set back to sessionStorage 
sessionStorage.setItem('levelOneANS', JSON.stringify(levelOneANS));
  }
}

