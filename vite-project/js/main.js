const URL = {
  actors: "https://api.catalogopolis.xyz/v1/actors",
  // companions: "https://api.catalogopolis.xyz/v1/companions",
  doctors: "https://api.catalogopolis.xyz/v1/doctors",
  episodes: "https://api.catalogopolis.xyz/v1/episodes",
  seasons: "https://api.catalogopolis.xyz/v1/seasons",
  writers: "https://api.catalogopolis.xyz/v1/writers",
};
const hist = [];
const box = document.getElementById("cards");

document.querySelector("#form").addEventListener("submit", function (e) {
  e.preventDefault();
  show(URL.actors);
});

function the() {
  console.log(search);
}

async function show(e) {
  const response = await fetch(e);
  const res = await response.json();
  box.innerHTML = "";
  const search = document.getElementById("input").value.toLowerCase();
  const filtered = res.filter((el) => {
    const namematch = el.name.toLowerCase().includes(search);
    const docs = el.incarnation.toLowerCase().includes(search);
    const ep = el.title.toLowerCase().includes(search);
    return namematch || docs || ep;
  });
  console.log(filtered);
}
