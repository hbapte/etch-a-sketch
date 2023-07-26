const container = document.getElementById('gridcontainer');
const resetBtn = document.getElementById('resetbutton');

function createGrid(size) {
    container.innerHTML = "";
    container.style.setProperty("--grid-size", size);
  
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
    }
  }
  
  function setGridListeners() {
    const squares = document.querySelectorAll(".square");
  
    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = getRandomColor();
      });
    });
  }
  
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  resetBtn.addEventListener("click", () => {
    const newSize = prompt("Enter the number of squares per side (max 100):");
    if (newSize) {
      const size = Math.min(parseInt(newSize), 100);
      createGrid(size);
      setGridListeners();
    }
  });
  
 
  createGrid(16);
  setGridListeners();