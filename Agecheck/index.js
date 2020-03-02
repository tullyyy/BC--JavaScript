const age = Number(prompt("Enter your age:"));

if (age >= 18) {
  document.write("Welcome");
} else {
  const diff = 18 - age;

  if (diff < 3) {
    document.write("Almost There");
  } else if (diff < 8) {
    document.write("Leave");
  } else {
    document.write("You have many more years!");
  }
}
