const calculateTemp = () => {
  const numberTemp = document.getElementById("temp").value;
  const tempSelected = document.getElementById("temp_diff");

  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  const celtoFah = (cel) => {
    let fahrenheit = Math.round(32 + (cel * 9) / 5);
    return fahrenheit;
  };

  const fahtoCel = (fah) => {
    let celcius = Math.round(((fah - 32) * 5) / 9);
    return celcius;
  };

  let result;

  if (valueTemp == "cel") {
    result = celtoFah(numberTemp);
    document.getElementById(
      "result_container"
    ).innerHTML = `${result} °Fahrenheit`;
  } else {
    result = fahtoCel(numberTemp);
    document.getElementById(
      "result_container"
    ).innerHTML = `${result} °Celcius`;
  }
};
