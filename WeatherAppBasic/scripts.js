const keys = "5944c7a72a9df4cc4e4073745279eafb";
//  api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    const searchQuery = form.elements.query.value;
    const config = { params: { q: searchQuery, appid: keys, units: "metric" } };
    const response = await axios(
      "https://api.openweathermap.org/data/2.5/weather",
      config
    );
    const lis = document.querySelectorAll("li");
    for (let li of lis) {
      li.remove();
    }
    displayResponse(response.data);
  } catch (error) {
    throw "Ops, Something has happened";
  }
});
const ul = document.querySelector("ul");
function displayResponse(response) {
  const data = [
    response.name,
    response.main.temp,
    response.sys.country,
    response.weather[0].main,
  ];
  const description = ["City: ", "Temp (C): ", "Country ID: ", "Weather: "];
  let i = 0;
  for (let e of data) {
    const li = document.createElement("li");
    li.textContent = `${description[i]}${e}`;
    ul.appendChild(li);
    i++;
  }
}
