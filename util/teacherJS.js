function renderCatFacts(facts) {
  const catFactsContainer = document.getElementById("cat-facts");
  catFactsContainer.innerHTML = ""; // Clear previous content

  const catFactSubtitle = document.createElement("p");
  catFactSubtitle.classList.add("subtitle");
  catFactSubtitle.textContent = "Cat Facts:";
  catFactsContainer.appendChild(catFactSubtitle);

  facts.forEach((fact) => {
    const factElement = document.createElement("div");
    factElement.classList.add("fact");

    const factText = document.createElement("p");
    factText.textContent = fact.fact;
    factElement.appendChild(factText);

    catFactsContainer.appendChild(factElement);
  });
}
// Function to test the getCatFacts(num) function
function testGetCatFacts() {
  // Check if getCatFacts is a function
  if (typeof getCatFacts !== "function") {
    alert("getCatFacts is not a function");
    return false;
  }

  // Check if getCatFacts takes a number as a parameter
  const num = 5; // Example number
  const result = getCatFacts(num);
  if (!result || typeof result !== "object") {
    alert("Invalid result: Expected an object");
    return false;
  }

  return true;
}

// Function to handle the generate button click
function handleGenerateButtonClick() {
  const factCountInput = document.getElementById("fact-count");
  const num = parseInt(factCountInput.value);

  if (testGetCatFacts()) {
    getCatFacts(num)
      .then((data) => {
        if (data && data.data) {
          renderCatFacts(data.data);
        } else {
          console.error("Invalid data received");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    console.error("Invalid input");
  }
}

// Attach click event listener to the generate button
const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", handleGenerateButtonClick);
