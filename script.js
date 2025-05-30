let css = "";
let prevStyles = [];
let markingNums = [];

function generateTambolaTicket() {
  markingNums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  ];

  //shuffling markingNums array
  for (let i = 0; i < 100; i++) {
    let a = Math.floor(Math.random() * markingNums.length);
    let b = Math.floor(Math.random() * markingNums.length);

    let temp = markingNums[a];
    markingNums[a] = markingNums[b];
    markingNums[b] = temp;
  }

  //marked number border reset
  for (let i = 1; i <= 90; i++) {
    document.getElementById(`num${i}`).style.color = "white";
    document.getElementById(`num${i}`).style.borderColor = "white";
  }

  console.log(markingNums);

  prevStyles.forEach((s) => document.head.removeChild(s));
  prevStyles = [];

  document.querySelector("#recentMarkedNum").textContent = "-";
  document.getElementById("tambolaSpan").style.display = "none";

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

  for (let r1col = 1; r1col <= 9; r1col++) {
    document.getElementById(`r1c${r1col}`).textContent = " ";
  }
  for (let r2col = 1; r2col <= 9; r2col++) {
    document.getElementById(`r2c${r2col}`).textContent = " ";
  }
  for (let r3col = 1; r3col <= 9; r3col++) {
    document.getElementById(`r3c${r3col}`).textContent = " ";
  }

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

let markNum = 0;

function generateMarkingNum() {
  document.getElementById("tambolaSpan").style.display = "inline-block";
  document.getElementById(`num${markingNums[markNum]}`).style.color = "skyblue";
  document.getElementById(`num${markingNums[markNum]}`).style.borderColor =
    "blue";
  document.querySelector("#recentMarkedNum").textContent = markingNums[markNum];
  markNum++;
  if (markNum >= markingNums.length) {
    markNum = 0;
    alert(
      "All numbers have been called. A new Tambola Ticket will be generated when OK is pressed."
    );
    document.getElementById("tambolaSpan").style.display = "none";
    document.querySelector("#recentMarkedNum").textContent = "-";
    for (let i = 1; i <= 90; i++) {
      document.getElementById(`num${i}`).style.color = "white";
      document.getElementById(`num${i}`).style.borderColor = "white";
    }
    generateTambolaTicket();
  }
}
