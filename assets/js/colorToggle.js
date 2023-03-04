let body = document.getElementsByTagName("body")[0];

function setColorMode(mode) {
  if (mode === "light") {
    body.classList.remove("dark");
  } else if (mode === "dark") {
    body.classList.add("dark");
  } else {
    throw new Error(`unrecognized color mode '${mode}'`);
  }

  localStorage.setItem("colorMode", mode);
}

function getColorMode() {
  return localStorage.getItem("colorMode") || "light";
}

function toggleColorMode() {
  let mode = getColorMode();

  if (mode === "light") {
    setColorMode("dark");
  } else if (mode === "dark") {
    setColorMode("light");
  } else {
    throw new Error(`unrecognized color mode '${mode}'`);
  }
}

setColorMode(getColorMode());

let colorToggle = document.getElementById("color-toggle");
colorToggle.addEventListener("click", toggleColorMode);

window.setColorMode = setColorMode;
