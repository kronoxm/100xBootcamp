const form = document.forms["returns-form"];

const getVals = (e) => {
  e.preventDefault();
  const capital = this.capital.value;
  return capital;
};
form.addEventListener("submit", getVals);
