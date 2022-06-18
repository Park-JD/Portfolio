window.onload = function () {
  document.documentElement.setAttribute("color-thema", "color");
};

let dark_mode = document.getElementById("dark_mode");

dark_mode.addEventListener("click", (e) => {
  if (e.target.innerText === "DARK") {
    document.documentElement.setAttribute("color-thema", "dark");
    e.target.innerText = "COLOR";
  } else {
    document.documentElement.setAttribute("color-thema", "color");
    e.target.innerText = "DARK";
  }
});

window.addEventListener("scroll", function () {
  let scroll_value = window.scrollY || document.documentElement.scrollTop;
  console.log(scroll_value);

  if (scroll_value < 200) {
    document.getElementById("x").style.display = "none";
    document.getElementById("x").style.textDecoration = "none";
  } else if (scroll_value >= 200) {
    document.getElementById("x").style.display = "block";
    document.getElementById("x").style.transition = "all 1s";
  }
  if (scroll_value >= 500) {
    document.getElementById("x").style.textDecoration = "underline";
  }
});
