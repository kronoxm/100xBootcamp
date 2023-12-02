function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const getVals = () => {
  const values = Array.from(
    document.querySelectorAll("#returns-form input")
  ).reduce(
    (acc, inp) => ({ ...acc, [inp.id]: parseFloat(inp.value) || 0 }),
    {}
  );

  if (Object.values(values).some((value) => value === 0)) {
    alert("Please fill in all fields before calculating.");
    return;
  }

  const finalAmount =
    values.capital * (1 + values.interest / 100) ** values.years;
  document.getElementById("final-amount").innerText = `$${numberWithCommas(
    finalAmount.toFixed(2)
  )}`;
};
