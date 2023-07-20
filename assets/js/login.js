const user__name = document.getElementById("user__name");
const user_password = document.getElementById("user__password");
const login_button = document.getElementById("__login");
const message__board = document.querySelector(".message");

const form = document.querySelector(".form1");

// console.log(form)

const credentials = {
  godwin: "dsep",
  nkechi: "loveline",
  shedrack: "coder",
  nnanna: "traveler",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (user__name.value in credentials) {
    let password = user_password.value;
    if (user_password.value == credentials[user__name.value]) {
      location.href = "../../try.html";
    } else {
      message__board.style.display = "block";
      message__board.innerText = "Wrong Password";
      setTimeout(() => {
        message__board.style.display = "none";
      }, 2000);
    }
  } else {
    message__board.style.display = "block";
    message__board.style.backgroundColor = "green";
    message__board.innerText = "Username not found";
    setTimeout(() => {
      message__board.style.display = "none";
    }, 2000);
  }
});
