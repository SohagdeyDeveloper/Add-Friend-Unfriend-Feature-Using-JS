// const removbtn = document.querySelector(".remove");
const h3txt = document.querySelector("h3");

let check = 0;

const cardcont = document.querySelector(".card-container");

// addbtn.addEventListener("click", function(){
//     if(1=="1"){
//         h3txt.textContent = "Friend";
//         h3txt.style.color = "green";
//     };
// });

// removbtn.addEventListener("click", function(){
//     if(1=="1"){
//         h3txt.textContent = "Stranger";
//         h3txt.style.color = "red";
//     };
// });

let buttons = document.querySelectorAll(".add");

buttons.forEach(function (button) {

  button.addEventListener("click", function () {
    
    let card = button.closest(".card");
    let h3 = card.querySelector("h3");

    if (button.textContent === "Add Friend") {
      h3.textContent = "Friend";
      h3.style.color = "green";
      button.textContent = "Remove Friend";
    } else {
      h3.textContent = "Unfriend";
      h3.style.color = "grey";
      button.textContent = "Add Friend";
    }
  });
});

