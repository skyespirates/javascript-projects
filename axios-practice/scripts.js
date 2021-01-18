const jokeBtn = document.querySelector("#joke-btn");
const jokeList = document.getElementById("jokeList");

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (error) {
    return "NO JOKE AVAILABLE";
  }
};
jokeBtn.addEventListener("click", async () => {
  const joke = await getDadJoke();
  const li = document.createElement("li");
  li.append(joke);
  jokeList.append(li);
});

const userBtn = document.querySelector("#user-btn");
const userList = document.querySelector("#userList");

const getUser = async () => {
  try {
    const rand = Math.floor(Math.random() * 10) + 1;
    const user = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${rand}`
    );
    return user.data.name;
  } catch (error) {
    return "NO USER AVAILABLE";
  }
};
userBtn.addEventListener("click", async () => {
  const user = await getUser();
  const li = document.createElement("li");
  li.append(user);
  userList.append(li);
});
