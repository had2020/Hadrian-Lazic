console.log("You must be one of us!");

const button4 = document.getElementById("exit_add_meal");
button4.addEventListener("click", Exit_Meal_Window);
//

//exit allergy window
function Exit_Allergy_Window() {
  allergy_window.classList.add("hidden"); // Hide
}
