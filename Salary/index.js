// const salary = (pay, hours, days) => {
//   return pay * hours * days;
// };

const calcSalary = (pay, hours, days) => {
  return pay * hours * days;
};

const validate = () => {
  const pay = document.querySelector("#pay");
  const hours = document.querySelector("#hours");
  const days = document.querySelector("#days");
  const salary = calcSalary(pay.value, hours.value, days.value);
  document.getElementById("result").innerHTML = salary;
  // const button = document.querySelector("#result");
  document.getElementById("result").style.color = "orange";
  document.getElementById("result").style.fontSize = "3em";
};

// const taxed_salary = (salary, tax) => {
//   return (1 - tax) * salary;
// };

// const brutto = salary(12, 8, 21);
// const netto = taxed_salary(brutto, 0.15);
// // ^^
// // EQUALS
// const netto = taxed_salary(salary(12, 8, 21), 0.15);

// Create an HTML page with a form where the user can enter their hourly pay, how many hours a day they work for how many days a month.
// When the user clicks a button the page will compute the salary and display it in big bold letter.
// Play with the design of the page a little so that it looks nice.
