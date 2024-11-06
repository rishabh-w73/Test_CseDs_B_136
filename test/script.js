function getJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => {
      const joke = `${data.setup} ${data.punchline}`;
      document.getElementById("joke").innerText = joke;
      document.getElementById(
        "char-count"
      ).innerText = `Character count: ${joke.length}`;
    })
    .catch((error) => {
      document.getElementById("joke").innerText = "Oops! Something went wrong.";
      document.getElementById("char-count").innerText = "Character count: 0";
      console.error("Error fetching joke:", error);
    });
}

function clearJoke() {
  document.getElementById("joke").innerText = "Press the button for a Joke!";
  document.getElementById("char-count").innerText = "Character count: 0";
}
