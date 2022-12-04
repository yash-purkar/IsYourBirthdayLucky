const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#luckyNum");
const checkBtn = document.querySelector("#check_num");
const outputBox = document.querySelector("#output_box");
// console.log(dateOfBirth.value);

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerHTML = "You are Lucky...🚀";
  }
  else {
    outputBox.innerHTML = "You are not Lucky😞";
  }
}
outputBox.innerHTML = "Plz fill both the fields... ";

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob) {
    compareValues(sum, luckyNumber.value)
  }
  else {
    outputBox.style.color = "red";
  }

}

function calculateSum(dob) {
  dob = dob.replaceAll("-", ""); //It will remove all the hyphens
  // console.log(typeof dob);
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i))
  }

  return sum;
}

checkBtn.addEventListener("click", checkBirthDateIsLucky)

