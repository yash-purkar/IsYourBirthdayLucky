const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#luckyNum");
const checkBtn = document.querySelector("#check_num");

console.log(dateOfBirth.value);

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", ""); //It will remove all the hyphens
  // console.log(typeof dob);
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i))
  }
  console.log(sum);
  return sum;
}

checkBtn.addEventListener("click", checkBirthDateIsLucky)

