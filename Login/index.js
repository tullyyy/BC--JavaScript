// const user = username.Value;
// const pass = password.Value;

const validation = () => {
  const user = document.querySelector("#username");
  const pass = document.querySelector("#password");
  if (user.value == "Iubi" && pass.value == "020919") {
    document.write("Good baby!");
  } else {
    document.write("Nice try, you're not Iubi!");
  }
};

// Create a login page where the user can enter their username and password. If the user enter incorrect password display a nasty insulting message on the page. If the password is corrent display a gentle welcoming message.
