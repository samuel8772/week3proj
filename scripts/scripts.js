
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

const birthdateForm = document.getElementById("birthdateForm");
const resultParagraph = document.getElementById("result");

birthdateForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const birthdate = new Date(document.getElementById("birthdate").value);
  const gender = document.getElementById("gender").value;

  if (gender === "") {
    alert("Please select a gender.");
    return;
  }

  const dayOfWeek = calculateDayOfWeek(birthdate.getDate(), birthdate.getMonth() + 1, birthdate.getFullYear());
  const akanName = getAkanName(dayOfWeek, gender);

  resultParagraph.textContent = `Your Akan name is: ${akanName}`;
});

function calculateDayOfWeek(day, month, year) {
  const century = Math.floor(year / 100);
  const yearDigits = year % 100;

  const dayOfWeek = (((century / 4) - 2 * century - 1) + ((5 * yearDigits / 4)) + ((26 * (month + 1)) / 10) + day) % 7;

  return Math.floor(dayOfWeek);
}

function getAkanName(dayOfWeek, gender) {
  if (gender === "male") {
    return maleNames[dayOfWeek-1];
  } else {
    return femaleNames[dayOfWeek-1];
  }
}

output.textContent = "Your Akan name is: " + akanName;
output.style.color = "green";
output.style.fontSize = "1.5em";

