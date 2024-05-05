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
  let prompt = `display a difficult and short riddle on the subject only provided by ${userInstructions.value}. provide the answer to the riddle seperated from the riddle by a <br /><br />. Please display the ridde as follows Riddle: Answer: both in a <strong> element`;
  let context =
    "you are a playful riddle AI assistant who enjoys giving users a challenge";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(generateRiddle);
}

let riddleInputElement = document.querySelector("#submit-riddle");
riddleInputElement.addEventListener("submit", riddleGenerator);
