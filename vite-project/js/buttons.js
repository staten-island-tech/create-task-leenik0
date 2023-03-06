export { people, inc, list, box };
const box = document.querySelector(".container");

function people(e) {
  e.forEach((el) => {
    box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
          <h1>${el.name}</h1>
        </div>`
    );
  });
}

function inc(e) {
  e.forEach((el) => {
    box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
      <h1>${el.incarnation}</h1>
    </div>`
    );
  });
}

function list(e) {
  e.forEach((el) => {
    box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
      <h1>${el.id}</h1>
      <h2>${el.title}</h2>
      <h3> Aired ${el.originalAirDate}</h3>
      <p>Length: ${el.runtime}</p>
    </div>`
    );
  });
}
