import { people, inc, list, box } from "./buttons.js";
// constants
const URL = {
  writers: "https://api.catalogopolis.xyz/v1/writers",
  actors: "https://api.catalogopolis.xyz/v1/actors",
  doctors: "https://api.catalogopolis.xyz/v1/doctors",
  episodes: "https://api.catalogopolis.xyz/v1/episodes",
};
const button = {
  buttons: document.querySelectorAll(".button"),
  actor: document.getElementById("act"),
  doctor: document.getElementById("doc"),
  write: document.getElementById("write"),
  episode: document.getElementById("eps"),
  history: document.getElementById("hist"),
  searches: document.getElementById("searches"),
};

const inputs = {
  all: document.querySelectorAll(".inp"),
  inp1: document.getElementById("input-1"),
  inp2: document.getElementById("input-2"),
  inp3: document.getElementById("input-3"),
};

const hist = [];

// search bar
async function show(e, x, y) {
  const response = await fetch(e);
  const res = await response.json();
  const search = x.value.toLowerCase();
  const filtered = res.filter((el) => {
    if (e === URL.actors || e === URL.writers) {
      if (el.name.toLowerCase().includes(search)) {
        const namematch = el.name.toLowerCase().includes(search);
        return namematch;
      } else {
        console.log("no");
      }
    } else if (e === URL.doctors) {
      const docs = el.incarnation.toLowerCase().includes(search);
      return docs;
    } else if (e === URL.episodes) {
      const ep = el.id.toString() === search;
      if (typeof el.title != "undefined" && el.title != null) {
        titlematch = el.title.toLowerCase().includes(search);
        return { titlematch, ep };
      } else {
        return ep;
      }
    }
  });
  switch (y) {
    case "1":
      people(filtered);
      break;
    case "2":
      inc(filtered);
      break;
    case "3":
      list(filtered);
      break;
  }
}

document.querySelectorAll(".form").forEach((el) => {
  el.addEventListener("submit", function (e) {
    e.preventDefault();
    if (e.length === 0) {
      alert("Search must be filled out");
    } else {
      box.setAttribute("id", "cards");
      hist.push(e.value);
      box.innerHTML = "";
      switch (e.target) {
        case document.getElementById("sub1"):
          show(URL.actors, inputs.inp1, "1");
          show(URL.writers, inputs.inp1, "1");
          break;
        case document.getElementById("sub2"):
          show(URL.doctors, inputs.inp2, "2");
          break;
        case document.getElementById("sub3"):
          show(URL.episodes, inputs.inp3, "3");
          break;
      }
    }
  });
});

// buttons

button.buttons.forEach((button) => button.addEventListener("click", btn));

async function data1(x) {
  const response2 = await fetch(x);
  const res2 = await response2.json();
  people(res2);
}

async function data2(x) {
  const response3 = await fetch(x);
  const res3 = await response3.json();
  inc(res3);
}

async function data3(x) {
  const response4 = await fetch(x);
  const res4 = await response4.json();
  list(res4);
}

function his() {
  if (hist.length === 0) {
    box.insertAdjacentHTML("afterbegin", "<h1 id='nope'>Nothing yet!</h1>");
  } else {
    box.setAttribute("id", "srch");
    hist.forEach((el) => {
      box.insertAdjacentHTML(
        "afterbegin",
        `
    <h1>${el}</h1>
    `
      );
    });
  }
}

function btn(e) {
  box.setAttribute("id", "cards");
  box.innerHTML = "";
  switch (e.target) {
    case button.actor:
      data1(URL.actors);
      break;
    case button.write:
      data1(URL.writers);
      break;
    case button.doctor:
      data2(URL.doctors);
      break;
    case button.episode:
      data3(URL.episodes);
      break;
    case button.history:
      his();
      break;
  }
}
