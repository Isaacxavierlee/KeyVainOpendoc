document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get input values
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var subject = document.getElementById("subjectInput").value;
  var message = document.getElementById("messageInput").value;
  
  // Perform validation or further processing if needed
  
  // Example: Display the input values in the console
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);
  
  // Clear input fields
  document.getElementById("nameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("subjectInput").value = "";
  document.getElementById("messageInput").value = "";
  
});
