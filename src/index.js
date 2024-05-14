function generateRiddle(response) {
  new Typewriter("#riddle-result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function riddleGenerator(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#userInstructions");
  let apiKey = "bd69aeefb72b8a36of7aa0db00f9b34t";
  let prompt = `display a fun short riddle about ${userInstructions.value} only no other animal or answer. Provide the answer to the riddle seperated from the riddle by a <br /><br />. Please display the ridde as follows Riddle: Answer: both in a <strong> element`;
  let context = `you are a playful riddle AI assistant who enjoys giving users a challenging riddle about the an animal provided by ${userInstructions.value} only`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let riddleElement = document.querySelector("#riddle-result");
  riddleElement.innerHTML = `<div class="blink">⌛ Generating a riddle about a ${userInstructions.value}...</div>`;
  riddleElement.classList.remove("hidden");

  axios.get(apiUrl).then(generateRiddle);
}

let riddleInputElement = document.querySelector("#submit-riddle");
riddleInputElement.addEventListener("submit", riddleGenerator);
