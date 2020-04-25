const hireable = document.getElementById("hierable");

fetch("https://api.github.com/users/TitusEntertainment")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (data.hireable) {
      hireable.innerHTML = "true";
    } else {
      hireable.innerHTML = "false";
    }
  });
