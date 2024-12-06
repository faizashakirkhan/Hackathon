// // script.js

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    // Simple validation check (for demonstration purposes)
    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Here you would typically handle form submission to the server
    // e.g., send the data via AJAX, or redirect to another page
});

// document.getElementById('myButton').addEventListener('post', function() {
//     Swal.fire({
//  title: "The Internet?",
//  text: "That thing is still around?",
//  icon: "question"
// });
// });


  Swal.fire({
    title: "Welcom To Facebook",
    text: "You clicked the button!",
    icon: "success"
  });

  
  
//   post.innerHTML += `
//   <button onclick="post()" class="btn postBtn">Post</button>`

//    Swal.fire({
//      title: "Empty Post",
//      text: "Can't publish post without Title or Description",
//      icon: "question",
//    });
function post() {
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to post this?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, post it!',
        cancelButtonText: 'No, cancel!',
    }).then((result) => {
        if (result.isConfirmed) {
            // Code to execute the post action goes here
            Swal.fire(
                'Posted!',
                'Your post has been submitted.',
                'success'
            );
        }
    });
}