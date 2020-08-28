let reponses = newArray(newArray()); 



function myFunction(data) {
  // Get the existing data
if (sessionStorage .getItem('responses') === null) {
    //Initialize the array 
    var responses= [][];
    //Add to array
    rotation[0].push(object);
    //Set to sessionStorage 
    sessionStorage .setItem('responses', JSON.stringify(responses));
} else {
// Get elements from sessionStorage 
var rotation = JSON.parse(sessionStorage .getItem('rotation'));
// Add element to array
rotation.push(data);
// Re-set back to sessionStorage 
sessionStorage .setItem('responses', JSON.stringify(responses));
  }
}

