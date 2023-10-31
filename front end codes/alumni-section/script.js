const navLinks = document.querySelector('.nav-links');
let menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});
function search(){
var selected_branch = document.getElementById("branch").value;
document.querySelectorAll(".student_branch").textContent = selected_branch;
alert(student_branch);
};
