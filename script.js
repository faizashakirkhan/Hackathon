document.addEventListener("DOMContentLoaded", () => {
	// Get form elements
	const signup = document.getElementById("signup"); // Correct form ID
	const signIn = document.getElementById("signIn");   // Correct form ID

	// Signup form submission handler
	signup.addEventListener("submit", (event) => {
		event.preventDefault(); // Prevent form default submission

		// Access form fields
		const username = document.getElementById("users").value.trim();
		const email = document.getElementById("email1").value.trim();
		const password = document.getElementById("password1").value.trim();
		const confirmpassword = document.getElementById("confirm password").value; // Fixed ID

		// Validate password match
		if (password !== confirmpassword) {
			alert("Passwords do not match!");
			return;
		}

		// Add a console log to check if this code is executed
		console.log("Password matches, redirecting to post.html");

	});
});



	// Login form submission handler
	signIn.addEventListener("submit", (event) => {
		event.preventDefault(); // Prevent form default submission

		const email = document.getElementById("email").value.trim();
		const password = document.getElementById("password").value.trim();

		// Redirect to the dashboard
		window.location.href = "post.html";
	});