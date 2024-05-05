function generateRiddle(event) {
  event.preventDefault();

  new Typewriter("#riddle-result", {
    strings: "riddle results",
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

let riddleInputElement = document.querySelector("#submit-riddle");
riddleInputElement.addEventListener("submit", generateRiddle);
