function color() {
  const red = document.querySelector("[data-red]").value;
  const green = document.querySelector("[data-green]").value;
  const blue = document.querySelector("[data-blue]").value;
  const rgb = document.querySelector("[data-rgb]");
  const colorGen = (document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")");

  rgb.innerHTML = colorGen;
}
