const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("postBtn");

getBtn.addEventListener("click", () => {
  getData();
});
postBtn.addEventListener("click", () => {
  postData();
});

// GET
async function getData() {
  const response = await fetch("http://localhost:3030/");
  const data = await response.json();
  console.log("data from GET ", data);
}

// POST
async function postData() {
  const response = await fetch("http://localhost:3030/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ two: "two data" }),
  });
  const data = await response.json();
  console.log("data from POST ", data);
}
