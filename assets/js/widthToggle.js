let body = document.getElementsByTagName("body")[0];

function setPageWidth(width) {
  if (width === "narrow") {
    body.classList.remove("wide");
  } else if (width === "wide") {
    body.classList.add("wide");
  } else {
    throw new Error(`unrecognized page width '${width}'`);
  }

  localStorage.setItem("pageWidth", width);
}

function getPageWidth() {
  return localStorage.getItem("pageWidth") || "narrow";
}

function togglePageWidth() {
  let width = getPageWidth();

  if (width === "narrow") {
    setPageWidth("wide");
  } else if (width === "wide") {
    setPageWidth("narrow");
  } else {
    throw new Error(`unrecognized page width '${width}'`);
  }
}

setPageWidth(getPageWidth());

let widthToggle = document.getElementById("width-toggle");
widthToggle.addEventListener("click", togglePageWidth);

window.setPageWidth = setPageWidth;
