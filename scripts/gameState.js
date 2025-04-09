const gameState = {
  resources: {
    oxygen: 100,
    water: 100,
    food: 100,
    power: 100
  },
  buildings: [],
  colonists: [],
  gameStarted: false,
  camera: {
    x: 0, // will be set after resizeCanvas()
    y: 0, // will be set after resizeCanvas()
    speed: 4,
    bounds: { minX: 0, minY: 0, maxX: 2000, maxY: 2000 },
    moving: { up: false, down: false, left: false, right: false }
  },
  backgroundTileSize: 128 // px
};

function updateUI() {
  document.getElementById("oxygen").innerText = `${gameState.resources.oxygen}%`;
  document.getElementById("water").innerText = `${gameState.resources.water}%`;
  document.getElementById("food").innerText = `${gameState.resources.food}%`;
  document.getElementById("power").innerText = `${gameState.resources.power}%`;
}

function centerCamera() {
  window.centerCamera = function () {
    gameState.camera.x = 1000 - canvas.width / 2;
    gameState.camera.y = 1000 - canvas.height / 2;
  };
}