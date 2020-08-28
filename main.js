function myFunction(data) {
  // Get the existing data
var existing = localStorage.getItem('responses');

// If no existing data, create an array
// Otherwise, convert the localStorage string to an array
existing = existing ? existing.split(',') : [];

// Add new data to localStorage Array
existing.push(data.toString());

// Save back to localStorage
localStorage.setItem('responses', existing.toString());
}

