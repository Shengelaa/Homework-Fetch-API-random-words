const url = "https://api.quotable.io/random";

function text(quote, author) {
  const text1 = document.createElement("p");
  const text2 = document.createElement("p");
  const container = document.querySelector("#container");
  text1.classList.add("quote");
  text2.classList.add("author");
  text1.textContent = quote;
  text2.textContent = `- ${author}`;
  container.appendChild(text1);
  container.appendChild(text2);
}

fetch(url, { method: "GET" })
  .then((response) => response.json())
  .then((info) => {
    const quote = info.content;
    const author = info.author;
    text(quote, author);
  });
