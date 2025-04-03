// targeting the body
const myBody = document.body;

// adding style to body
myBody.style.padding = "1rem";

// making button
const btn = document.createElement("button");

// making h1
const myh1 = document.createElement("h1");

// adding styles to the h1
myh1.innerText = "My Blogs";
myh1.style.fontSize = "2rem";
myh1.style.fontWeight = "500";

// adding styles to the button
btn.innerText = `Show Blogs`;
btn.style.padding = "1rem";
btn.style.fontSize = "1.3rem";
btn.style.cursor = "pointer";
btn.style.backgroundColor = "grey";
btn.style.border = "none";
btn.style.borderRadius = "0.5rem";
btn.style.marginBottom = "1rem";

// append the elements in the body
myBody.appendChild(myh1);
myBody.appendChild(btn);

async function myBlogs() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const data = await fetch(url);
  const res = await data.json();
  console.log(res);
}
