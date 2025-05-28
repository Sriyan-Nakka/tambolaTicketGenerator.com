let css = "";
let prevStyles = [];

function generateTambolaTicket() {
  prevStyles.forEach((s) => document.head.removeChild(s));
  prevStyles = [];

  for (let row = 1; row <= 3; row++) {
    for (let column = 1; column <= 9; column++) {
      let cell = document.getElementById(`r${row}c${column}`);
      if (cell) cell.classList.remove("marked");
      cell.removeEventListener("click", marked);
    }
  }

  let row1Placement = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let row2Placement = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let row3Placement = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  ];

  document.getElementById(`r1c1`).textContent = " ";
  document.getElementById(`r1c2`).textContent = " ";
  document.getElementById(`r1c3`).textContent = " ";
  document.getElementById(`r1c4`).textContent = " ";
  document.getElementById(`r1c5`).textContent = " ";
  document.getElementById(`r1c6`).textContent = " ";
  document.getElementById(`r1c7`).textContent = " ";
  document.getElementById(`r1c8`).textContent = " ";
  document.getElementById(`r1c9`).textContent = " ";

  document.getElementById(`r2c1`).textContent = " ";
  document.getElementById(`r2c2`).textContent = " ";
  document.getElementById(`r2c3`).textContent = " ";
  document.getElementById(`r2c4`).textContent = " ";
  document.getElementById(`r2c5`).textContent = " ";
  document.getElementById(`r2c6`).textContent = " ";
  document.getElementById(`r2c7`).textContent = " ";
  document.getElementById(`r2c8`).textContent = " ";
  document.getElementById(`r2c9`).textContent = " ";

  document.getElementById(`r3c1`).textContent = " ";
  document.getElementById(`r3c2`).textContent = " ";
  document.getElementById(`r3c3`).textContent = " ";
  document.getElementById(`r3c4`).textContent = " ";
  document.getElementById(`r3c5`).textContent = " ";
  document.getElementById(`r3c6`).textContent = " ";
  document.getElementById(`r3c7`).textContent = " ";
  document.getElementById(`r3c8`).textContent = " ";
  document.getElementById(`r3c9`).textContent = " ";

  document.querySelector("#ticketDiv").style.display = "block";

  for (let i = 0; i < 100; i++) {
    let a = Math.floor(Math.random() * numbers.length);
    let b = Math.floor(Math.random() * numbers.length);
    let temp = numbers[a];
    numbers[a] = numbers[b];
    numbers[b] = temp;
  }

  for (let j = 0; j < 25; j++) {
    let a = Math.floor(Math.random() * row1Placement.length);
    let b = Math.floor(Math.random() * row1Placement.length);
    let temp = row1Placement[a];
    row1Placement[a] = row1Placement[b];
    row1Placement[b] = temp;
  }

  for (let k = 0; k < 25; k++) {
    let a = Math.floor(Math.random() * row2Placement.length);
    let b = Math.floor(Math.random() * row2Placement.length);
    let temp = row2Placement[a];
    row2Placement[a] = row2Placement[b];
    row2Placement[b] = temp;
  }

  for (let l = 0; l < 25; l++) {
    let a = Math.floor(Math.random() * row3Placement.length);
    let b = Math.floor(Math.random() * row3Placement.length);
    let temp = row3Placement[a];
    row3Placement[a] = row3Placement[b];
    row3Placement[b] = temp;
  }

  for (let row1Num = 0; row1Num <= 4; row1Num++) {
    document.getElementById(`r1c${row1Placement[row1Num]}`).textContent =
      numbers[row1Num];
    css = `
    @media (pointer: fine) and (min-width: 1024px) {
      #r1c${row1Placement[row1Num]}:hover{
        background-color: black;
        color: white;
        cursor: pointer;
      }
  }
    `;
    style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    prevStyles.push(style);

    document
      .getElementById(`r1c${row1Placement[row1Num]}`)
      .addEventListener("click", marked);
  }

  for (let row2Num = 0; row2Num <= 4; row2Num++) {
    document.getElementById(`r2c${row2Placement[row2Num]}`).textContent =
      numbers[5 + row2Num];
    css = `
    @media (pointer: fine) and (min-width: 1024px) {
      #r2c${row2Placement[row2Num]}:hover{
        background-color: black;
        color: white;
        cursor: pointer;
      }
  }
    `;
    style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    prevStyles.push(style);

    document
      .getElementById(`r2c${row2Placement[row2Num]}`)
      .addEventListener("click", marked);
  }

  for (let row3Num = 0; row3Num <= 4; row3Num++) {
    document.getElementById(`r3c${row3Placement[row3Num]}`).textContent =
      numbers[10 + row3Num];
    css = `
    @media (pointer: fine) and (min-width: 1024px) {
      #r3c${row3Placement[row3Num]}:hover{
        background-color: black;
        color: white;
        cursor: pointer;
      }
  }
    `;
    style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    prevStyles.push(style);

    document
      .getElementById(`r3c${row3Placement[row3Num]}`)
      .addEventListener("click", marked);
  }
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    generateTambolaTicket();
  }
});

function marked(event) {
  event.currentTarget.classList.toggle("marked");
}
