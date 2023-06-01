function requestHTML(url, targetId) {
  const container = document.createElement("div");
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.onload = function () {
    container.innerHTML = xhr.responseText;
    const target = document.getElementById(targetId);

    target?.appendChild(container);
  };

  xhr.send();
}

// Пример использования функции
const requests = [
  fetch("./cap.html").then((res) => res.text()),
  fetch("./side_piece_C-sharp.html").then((res) => res.text()),
];

Promise.all(requests)
  .then(([cap, sidePiece, sidePieceMenu, capMenu]) => {
    const header = document.getElementById("header");
    const sidePieceEl = document.getElementById("side_piece");
    const sidePieceMenuEl = document.getElementById("side_piece2");
    const capMenuEl = document.getElementById("hedd");

    const capContainer = document.createElement("div");
    capContainer.innerHTML = cap;
    header?.appendChild(capContainer);

    const sidePieceContainer = document.createElement("div");
    sidePieceContainer.innerHTML = sidePiece;
    sidePieceEl?.appendChild(sidePieceContainer);

    const sidePieceMenuContainer = document.createElement("div");
    sidePieceMenuContainer.innerHTML = sidePieceMenu;
    sidePieceMenuEl?.appendChild(sidePieceMenuContainer);

    const capMenuContainer = document.createElement("div");
    capMenuContainer.innerHTML = capMenu;
    capMenuEl?.appendChild(capMenuContainer);
  })
  .catch((error) => console.error(error));

let menuList = document.querySelector(".menu-list");

// menuButton.addEventListener("click", function () {
//   if (menuList.style.display === "none") {
//     menuList.style.display = "block";
//   } else {
//     menuList.style.display = "none";
//   }
// });

function toggleText(id) {
  let text = document.getElementById(id);
  if (text.classList.contains("active")) {
    text.classList.remove("active");
    setTimeout(() => {
      text.style.display = "none";
    }, 300);
  } else {
    text.style.display = "block";
    setTimeout(() => {
      text.classList.add("active");
    }, 10);
  }
}

const container = [
  "hiddenText",
  "hiddenText2",
  "hiddenText3",
  "hiddenText4",
  "hiddenText5",
  "hiddenText6",
  "hiddenText7",
  "hiddenText8",
  "hiddenText9",
  "hiddenText10",
  "hiddenText11",
  "hiddenText12",
  "hiddenText12",
  "hiddenText13",
  "hiddenText14",
  "hiddenText15",
  "hiddenText16",
  "hiddenText17",
  "hiddenText18",
  "hiddenText19",
  "hiddenText20",
  "hiddenText21",
  "hiddenText22",
  "hiddenText23",
  "hiddenText24",
  "hiddenText25",
  "hiddenText26",
  "hiddenText27",
  "hiddenText28",
  "hiddenText29",
  "hiddenText30",
];
container.forEach((container) => createNumberSequence(container));
