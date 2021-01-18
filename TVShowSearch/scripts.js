const form = document.querySelector("form");
const container = document.querySelector(".container");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchQuery = form.elements.query.value;
  const config = { params: { q: searchQuery } };
  const request = await axios(`http://api.tvmaze.com/search/shows`, config);
  displayImage(request.data);
  form.elements.query.value = "";
});

const displayImage = (shows) => {
  for (let res of shows) {
    if (res.show.image) {
      const img = document.createElement("img");
      img.src = res.show.image.medium;
      container.append(img);
    }
  }
};
