var levelOne = ["In general, do you feel sad?", "Did you eat breakfast today?", "Are you safe?"];
var levelTwo = [];
var levelThree = [];

function myFunction(data) {
  // Get the existing data
if (sessionStorage.getItem('levelOne') === null) {
    //Initialize the array 
    var levelOne= []; 
    //Add to array
    levelOne.push(data);
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

