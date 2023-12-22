const colorPicker = document.getElementById("colorPicker");
const box = document.getElementById("box");
const output = document.getElementById("output");
const primColor = document.querySelector(":root");

box.style.borderColor = colorPicker.value;


colorPicker.addEventListener(
  "input",
  (event) => {
    box.style.borderColor = event.target.value;
  },
  false,
);

colorPicker.addEventListener(
  "change",
  (event) => {
    output.innerText = `Color set to ${colorPicker.value}.`;
    primColor.style.setProperty("--primary-color", colorPicker.value);
  },
  false,
);
