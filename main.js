let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
// Add Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log('Button Clicked');
  formValidation();
});
// Form Validation Function
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "<em class='text-danger'>Post cannot be blank</em>";
    console.log("Failure");
  } else {
    acceptData();
  }
};
// Create Empty Data Object
let data = {};
// Create Accept data Function
let acceptData = () => {
  data["text"] = input.value;
  //console.log(data);
  createPost();
};
// Create Post Function
let createPost = () => {
  posts.innerHTML += `<div>
  <p>${data.text}</p>
  <span class="options">
    <i onClick="editPost(this)" class="fas fa-edit text-info"></i>
    <i onClick="deletePost(this)" class="fas fa-trash-alt text-danger"></i>
  </span>
</div>`;
  input.value = "";
};
// Delete Function
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};
// Edit Function
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
