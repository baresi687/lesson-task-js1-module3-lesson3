// 1

const greetMe = (name) => `Hello ${name}!`;
console.log(greetMe("Hreinn"));

const add = (a, b) => a + b;
console.log(add(5, 5));

// 2

fetch("https://noroff.herokuapp.com/v1/cat-facts/facts")
  .then((response) => response.json())
  .then((data) => console.log(data.length))
  .catch((error) => console.log(error));

async function getCatFacts() {
  try {
    const response = await fetch(
      "https://noroff.herokuapp.com/v1/cat-facts/facts"
    );
    const results = await response.json();
    console.log(results.length);
  } catch (error) {
    console.log(error);
  }
}

// getCatFacts();
